import Joi, { Schema } from "joi";

const emailJoiSchema = Joi.string().email({
        minDomainSegments: 2,
        tlds: { allow: ['com', 'net']}
    }).required()



export const createUserValidationSchema:Schema = Joi.object({

    first_name: Joi.string().alphanum().min(3).max(30).required(),

    last_name: Joi.string().alphanum().min(3).max(30).required(),

    password: Joi.string().required(),

    email: emailJoiSchema,
})

export const logUserValidationSchema: Schema = Joi.object({

    email: emailJoiSchema,

    password: Joi.string().required(),

})
