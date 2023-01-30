import { Request,Response } from "express";
import { notFoundError } from "@/errors";

async function getPaymentService(req:Request,res:Response){


}

async function postPaymentService(req:Request,res:Response){
 
    
}

const paymentsService = {
    getPaymentService,
    postPaymentService,
}

export default paymentsService