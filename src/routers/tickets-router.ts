import {Router} from "express"
import { authenticateToken } from "@/middlewares";
import { validateBody } from "@/middlewares/validation-middleware.js"; 
import { getTicketsType } from "@/controllers/tickets-crontroller";
const ticketsRouter = Router();

ticketsRouter
    .get("/tickets/types", authenticateToken, getTicketsType )
    .get("/tickets",authenticateToken )
    .post("/tickets", authenticateToken)

export {ticketsRouter};