import { ApolloServer } from "@apollo/server"
import { expressMiddleware } from "@apollo/server/express4"
import express from "express"
import mongoose from "mongoose";
import dotenv from "dotenv"
import { readFileSync } from "fs";
import { resolvers } from "./resolvers/resolvers.js" 

dotenv.config();
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


app.use('/graphql',express.json(), expressMiddleware(server, {
    context: async({req, res}) => {
        const token = req.headers.authorization || '';
        return {
            token
        }
    },
}))
app.listen(3000, () => console.log('running on port 3000'))
