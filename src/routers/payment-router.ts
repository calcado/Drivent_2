import { getPayment, postPayment } from "@/controllers";
import { authenticateToken } from "@/middlewares";
import {Router} from "express";

const paymentRouter = Router();

paymentRouter
    .get("/payments?ticketId=1",authenticateToken, getPayment)
    .post("/payments/process",authenticateToken, postPayment)

export {paymentRouter}