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
        const { password } = req.body
     
        const hashedPassword = await passwordHash(password)

        req.body.password = hashedPassword
        
        const createdUser = await UserModel.create(req.body)

        res.status(httpStatusCodes.OK).send(createdUser)

    } catch (e: any) {
        console.log(e)
        res.status(httpStatusCodes.SERVER_ERROR).json({message: e})
    }
})

export default auth
