import ticketsRepository from "@/repositories/tickets-repository";
import { Ticket, TicketType } from "@prisma/client";
import { Request,Response } from "express";
import { notFoundError } from "@/errors";
import enrollmentRepository from "@/repositories/enrollment-repository";
import { Tickets } from "@/protocols";

async function getTicketType(): Promise<TicketType[]>{
const TicketType = await ticketsRepository.getTicketsByType();

if (!TicketType) {
    throw notFoundError();
  }

return TicketType;  
}

async function getUserTicketService(id:number): Promise<Tickets>{
const result = await enrollmentRepository.findWithAddressByUserId(id);
if (!result) throw notFoundError();


const userTicket = await ticketsRepository.getTicketsUser(id);
if (!userTicket)  throw notFoundError();

return userTicket
}

async function postUserTicketService(){

}

const ticketsService = {
    getTicketType,
    getUserTicketService,
}

export default ticketsService;