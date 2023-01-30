import {Router} from "express"
import { authenticateToken } from "@/middlewares";
import { validateBody } from "@/middlewares/validation-middleware.js"; 
import { getTicketsType, getUserTicket } from "@/controllers/tickets-crontroller";
const ticketsRouter = Router();

ticketsRouter
    .get("/tickets/types", authenticateToken, getTicketsType )
    .get("/tickets",authenticateToken, getUserTicket )
    .post("/tickets", authenticateToken)

export {ticketsRouter};