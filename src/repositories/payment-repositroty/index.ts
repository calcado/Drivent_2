import { prisma } from "@/config";
import { Prisma } from "@prisma/client";

async function getPayment(ticketId:number){
return prisma.payment.findFirst({
    where: {ticketId}
})
}

async function postPayment(
    data: Prisma.PaymentUncheckedCreateInput 
    ){
return prisma.payment.create({
    data    
})
}

const paymentRepository = {
    getPayment,
    postPayment
}
export default paymentRepository