import { Request, Response } from "express";
import { Router } from "express";
import UserModel from "../models/User.js";
import { passwordHash, passwordVerify } from "../util/hash.js";
import httpStatusCodes from "../util/httpCodes.js";
import { createUserValidator, logUserValidator } from "../shared/middlewares/user-validator.middleware.js";
import jwt from "jsonwebtoken";

const auth = Router()

auth.post('/login', logUserValidator, async (req: Request, res: Response) => {
    try {
      
        const loggedUser = await UserModel.findOne({
            email: req.body.email,
        })
       
        if (!loggedUser) {
            return res.status(httpStatusCodes.OK).send({message: 'Password or email incorect'})
        }

        const verifyPassword = passwordVerify(req.body.password, loggedUser.password)

        if (!verifyPassword) {
            return res.status(httpStatusCodes.OK).send({message: 'Password or email incorect'})
        }


        const token = jwt.sign({ id: loggedUser.id, email: loggedUser.email }, process.env.JWT_SECRET_KEY)

        return res.status(httpStatusCodes.OK).send({user: loggedUser, token: token})

    } catch(e) {}
})

auth.post('/signup', createUserValidator, async (req: Request, res: Response) => {
    try {

        const hashedPassword:string = await passwordHash(req.body.password)

        const newUser = await UserModel.create({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            password: hashedPassword
        })

        res.status(httpStatusCodes.OK).send(newUser)

    } catch (e: any) {
        console.log(e)
        res.status(httpStatusCodes.SERVER_ERROR).json({message: e})
    }
})

export default auth
