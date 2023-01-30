import ticketsRepository from "@/repositories/tickets-repository";
import { Ticket, TicketType } from "@prisma/client";
import { Request,Response } from "express";
import { notFoundError } from "@/errors";

async function getTicketTypeService(req:Request,res:Response): Promise<TicketType[]>{
const result = await ticketsRepository.getTicketsByType();

if (!result) {
    throw notFoundError();
  }

return result;  
}

// async function getUserTicketService(req:Request,res:Response){

// }

// async function postUserTicketService(){

// }
const ticketsService = {
    getTicketTypeService,
    
}

export default ticketsService;