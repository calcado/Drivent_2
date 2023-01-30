import { Request, Response } from "express";
import httpStatus from "http-status";
import ticketsService from "@/services/tickets-service";

export async function getTicketsType(req:Request,res:Response){
try{
  const ticketsTypes = await ticketsService.getTicketTypeService(); 
  res.send(ticketsTypes).status(200)
}catch(err){
res.send(httpStatus.NOT_FOUND);
}

}

export async function getUserTicket(req:Request, res:Response){
try{
 const userTicket = await getTicketsUser();
 res.send(userTicket).status(200);
}catch(err){
  return res.sendStatus(httpStatus.NO_CONTENT)
}

}
export async function postUserTicket(req:Request, res:Response){
  try{
    
  }catch(err){
    return res.sendStatus(httpStatus.NO_CONTENT)
  }
}