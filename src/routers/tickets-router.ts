import {Router} from "express"
import { authenticateToken } from "@/middlewares";
import { validateBody } from "@/middlewares/validation-middleware"; 
import { getTicketsType, getUserTicket, postUserTicket } from "@/controllers/tickets-crontroller";
import { ticketSchema } from "@/schemas/ticket-schema";
const ticketsRouter = Router();

ticketsRouter
    .all("/*", authenticateToken)
    .get("/types",  getTicketsType )
    .get("/", getUserTicket )
    .post("/", validateBody(ticketSchema), postUserTicket )

export {ticketsRouter};