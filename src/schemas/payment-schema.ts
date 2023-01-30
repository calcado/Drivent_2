import joi, { number } from "joi";

const paymentSchema = joi.object({
ticketId: joi.number().required,
cardData: joi.object({
    issuer: joi.string().required(),
    number: joi.string().required(),
    name: joi.string().required(),
    expirationDate: joi.date().required(),
    cvv: joi.string().required(),
}).required(),
})

