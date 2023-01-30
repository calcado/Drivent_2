import { AuthenticatedRequest } from "@/middlewares";
import { Payments, PaymentsProcess } from "@/protocols";
import paymentsService from "@/services/payment-service";
import ticketsService from "@/services/tickets-service";
import { Request,Response } from "express";
import httpStatus from "http-status";
import { number } from "joi";

export async function getPayment(req:AuthenticatedRequest, res:Response){
    const {userId} = req;
    const {ticketId} = req.query as Record<string,string>
    const numberId: number = parseInt(ticketId);

    try{
     const userPayment = await paymentsService.getPaymentService(userId, numberId)
    return res.status(httpStatus.OK).send(userPayment)
    }catch(err){
    if(err.name === "UnauthorizedError"){
        return res.sendStatus(httpStatus.UNAUTHORIZED);
    }
    if(err.name==="NotFoundError"){
        return res.sendStatus(httpStatus.NOT_FOUND)
    }

    return res.sendStatus(httpStatus.BAD_REQUEST)}
}

export async function postPayment(req:AuthenticatedRequest, res:Response){
    const {userId} = req;
    const data = req.body as Payments;
    try{
        const purchasedTicket = await paymentsService.postPaymentService(userId,data)
        return res.status(httpStatus.CREATED).send(purchasedTicket);
    }catch(err){

    if(err.name ==="UnauthorizedError"){
        return res.sendStatus(httpStatus.UNAUTHORIZED)
    }
        return res.sendStatus(httpStatus.NOT_FOUND)
    }

}
