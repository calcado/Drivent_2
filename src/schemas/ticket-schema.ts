import joi from "joi"
import {TicketTypeId} from "../protocols"

export const ticketSchema  = joi.object<TicketTypeId>({
    ticketTypeId: joi.number().required()
})