import Joi, { Schema } from "joi";


export const createUserValidationSchema:Schema = Joi.object({

    first_name: Joi.string().alphanum().min(3).max(30).required(),

    last_name: Joi.string().alphanum().min(3).max(30).required(),

    password: Joi.string().required(),

    email: Joi.string().email({
        minDomainSegments: 2,
        tlds: { allow: ['com', 'net']}
    }).required(),
})


