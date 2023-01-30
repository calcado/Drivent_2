import { prisma } from "@/config";
import { Prisma } from "@prisma/client";

async function getPayment(id:number){
return prisma.payment.findFirst({
    where: {id}
})
}

async function postPayment(
    data: Prisma.PaymentUncheckedCreateInput 
    ){
return prisma.payment.create({
    data,    
})
}

const paymentRepository = {
    getPayment,
    postPayment
}
export default paymentRepository