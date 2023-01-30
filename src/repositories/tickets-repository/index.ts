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
    id: true,
    status: true,
    ticketTypeId: true,
    enrollmentId: true,
    TicketType:true,
    createdAt: true,
    updatedAt: true
    }
    })

} 

async function findTicketId(id:number){
    return prisma.ticket.findFirst({
        where:{id},
        include:{
            Enrollment: true,
            TicketType: true
        }
    })
}

async function updateTicket(id:number){
    return prisma.ticket.update({
        where:{
            id,
        },
        data:{
            status:"PAID",
        }
    })
    }

const ticketsRepository ={
    getTicketsByType,
    getTicketsUser,
    postTicket,
    findTicketId,
    updateTicket
}


export default ticketsRepository;