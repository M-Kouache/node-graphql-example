import { Request, Response } from "express";
import { Router } from "express";
import UserModel from "../models/User.js";
import { passwordHash } from "../util/hash.js";
import httpStatusCodes from "../util/httpCodes.js";
import { createUserValidator } from "../shared/middlewares/user-validator.middleware.js";

const auth = Router()

auth.get('/login', (_req: Request, res: Response) => {
    res.send('logn route')
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
