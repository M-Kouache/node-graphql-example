import { ApolloServer } from "@apollo/server"
import { expressMiddleware } from "@apollo/server/express4"
import express from "express"
import bodyParser from "body-parser"
import mongoose from "mongoose";
import dotenv from "dotenv"
import { readFileSync } from "fs";
import { resolvers } from "./resolvers/resolvers.js" 
import Auth from "./controllers/auth.js";
import { GraphQLError } from "graphql";
import UserModel from "./models/User.js";
import jwt, { JwtPayload } from "jsonwebtoken";


dotenv.config();
import { Jwt } from "jsonwebtoken";
mongoose.connect(process.env.DATABASE_URL);

const app = express()
const typeDefs = readFileSync('./schema.graphql', 'utf8');

export interface AppContext {
    token?: string; 
}

const server = new ApolloServer<AppContext>({
    typeDefs,
    resolvers
});

await server.start()

app.use(bodyParser.json())

app.use('/auth', Auth)

app.use('/graphql', expressMiddleware(server, {
    context: async({req}) => {
        const token = req.headers.authorization?.replace('Bearer', '');

        if (!token) {
            throw new GraphQLError('User is not authenticated', {
                extensions: {
                    code: 'UNAUTHENTICATED',
                    http: { status: 401 },
                },
            });
        }

        const tokenPayload = jwt.verify(token, process.env.JWT_SECRET_KEY)

        return {
            token: tokenPayload
        } 
    },
}))

app.listen(3000, () => console.log('running on port 3000'))

