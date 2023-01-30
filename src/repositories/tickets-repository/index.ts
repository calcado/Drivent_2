import { prisma } from "@/config";
import { Prisma } from "@prisma/client";
import { Tickets } from "@/protocols";
import { Ticket } from "@prisma/client";

async function getTicketsByType(){
    return prisma.ticketType.findMany();
}

async function getTicketsUser(id:number) {
    return prisma.ticket.findFirst({
        where :{Enrollment:{id}},
        include:{
            TicketType:true
        },
    })
     
}

async function postTicket(data:
    Prisma.TicketUncheckedCreateInput
){
    return prisma.ticket.create({
    data,
    select : {
    status,
    ticketTypeId,
    enrollmentId,
    TicketType:{
        name,
        price,
        isRemote,
        includesHotel
    }
    }
    })

} 



const ticketsRepository ={
    getTicketsByType,
    getTicketsUser,
    // postTicket
}


export default ticketsRepository;