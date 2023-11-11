import { Request, Response, NextFunction } from "express";
import httpStatusCodes from "../../util/httpCodes.js"
import { createUserValidationSchema } from "../validators/user.joi.validator.js";


export const createUserValidator = async (req: Request, res: Response, next: NextFunction) => {
    try {
        if (!req.body) {
            res.status(httpStatusCodes.BAD_REQUEST).send({message: 'Missing request body'});
        }

        await createUserValidationSchema.validateAsync(req.body);

        next();

    } catch(e) {
        console.log(e);
        res.status(httpStatusCodes.BAD_REQUEST).send({message: e});
    }
}



