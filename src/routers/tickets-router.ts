import {Router} from "express"
import { validateBody } from "@/middlewares/validation-middleware.js"; 

const ticketsRouter = Router();

ticketsRouter.get("/tickets/types", validateBody )
// ticketsRouter.get("/tickets",validateBody )
// ticketsRouter.post("/tickets", validateBody)

export {ticketsRouter};