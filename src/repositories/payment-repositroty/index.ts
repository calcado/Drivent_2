import { prisma } from "@/config";

export async function getPayment(id:number){
return prisma.payment.findFirst({
    where: {id}
})
}

export async function postPayment(
    ticketId:number, 
    cardData:{
        issuer: string,
        number: number,
        name: string,
        expirationDate: Date,
        cvv: number,
    }
    ){
return prisma.payment.create({
    data:{
        ticketId,
        cardData{
            issuer,
            number,
            name,
            expirationDate,
            cvv,
        }
    }
})
}

// const paymentReposiroty = {

// }
// export paymentReposiroty