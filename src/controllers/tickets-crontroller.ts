import { Request, Response } from "express";
import httpStatus from "http-status";
import {getTicketsByType} from "@/repositories/tickets-repository.js"

export async function getTicketsByType(req:Request,res:Response){
try{
  const ticketsType = await ticketsService.getTicketsByType()  
  res.send(ticketsType).status(200)
}catch(err){

}

}