import { Request,Response } from "express";
import { notFoundError, unauthorizedError } from "@/errors";
import paymentRepository from "@/repositories/payment-repositroty";
import ticketsRepository from "@/repositories/tickets-repository";

async function getPaymentService(tickedId: number, userId:number){
const existTicket = await ticketsRepository.getTicketsUser();

if(!existTicket){
    
}


}

async function postPaymentService(req:Request,res:Response){
 
    
}

const paymentsService = {
    getPaymentService,
    postPaymentService,
}

export default paymentsService