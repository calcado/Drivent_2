import { AuthenticatedRequest } from "@/middlewares";
import { Request, Response } from "express";
import httpStatus from "http-status";
import ticketsService from "@/services/tickets-service";
import { TicketTypeId } from "@/protocols";

export async function getTicketsType(req:Request,res:Response){
  try{
  const ticketsTypes = await ticketsService.getTicketType(); 
  res.status(httpStatus.OK).send(ticketsTypes)
}catch(err){

res.send(httpStatus.NOT_FOUND);
}

}

export async function getUserTicket(req: AuthenticatedRequest, res: Response){
  const {userId} = req;

  try{
 const userTicket = await ticketsService.getUserTicketService(userId);
 res.status(httpStatus.OK).send(userTicket);

}catch(err){
  return res.sendStatus(httpStatus.NOT_FOUND)
}

}

export async function postUserTicket(req:AuthenticatedRequest, res:Response){
  const {userId} = req;
  const {ticketTypeId} = req.body as TicketTypeId 
  try{
   
   const postTicket = await ticketsService.postUserTicketService(userId,ticketTypeId)
   return res.status(httpStatus.CREATED).send(postTicket) 
  }catch(err){
    return res.sendStatus(httpStatus.NOT_FOUND)
  }
}