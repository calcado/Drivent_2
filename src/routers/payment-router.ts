import { getPayment, postPayment } from "@/controllers";
import { authenticateToken } from "@/middlewares";
import {Router} from "express";
import { validateBody } from "@/middlewares";
import { paymentSchema } from "@/schemas/payment-schema";
const paymentRouter = Router();

paymentRouter
    .all("/*", authenticateToken)
    .get("/", getPayment)
    .post("/process",validateBody(paymentSchema), postPayment)

export {paymentRouter}