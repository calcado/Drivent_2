import { Request,Response } from "express";
import { notFoundError, unauthorizedError } from "@/errors";
import paymentRepository from "@/repositories/payment-repositroty";
import ticketsRepository from "@/repositories/tickets-repository";
import { PaymentsProcess,Payments } from "@/protocols"

async function getPaymentService(ticketId: number, userId:number):Promise<PaymentsProcess>{
const userTicket = await ticketsRepository.findTicketId(ticketId);


if(!userTicket) throw notFoundError();
if(userTicket.Enrollment.userId !== userId ) throw unauthorizedError();

const userPayment = await paymentRepository.getPayment(ticketId)
if(!userPayment) throw notFoundError();

return userPayment;

}

async function postPaymentService(userId: number, data:Payments ):Promise<PaymentsProcess>{
const userTicket = await ticketsRepository.getTicketsUser(data.ticketId);

if(!userTicket) throw notFoundError;

const update = await ticketsRepository.updateTicket(data.ticketId)

const paymentUpdate = {
    ticketId: data.ticketId,
    value:userTicket.TicketType.price,
    cardIssuer: data.cardData.issuer,
    cardLastDigits:data.cardData.number.toString().slice(-4)
}

const userPayment = await paymentRepository.postPayment(paymentUpdate);
if(!userPayment) throw notFoundError;

return userPayment

}

const paymentsService = {
    getPaymentService,
    postPaymentService,
}

export default paymentsService