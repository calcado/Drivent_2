import { prisma } from "@/config";
import { Tickets } from "@/protocols";
import { Ticket } from "@prisma/client";

async function getTicketsByType(){
    return await prisma.ticketType.findMany();
}

async function getTicketsUser(id:number) {
    return await prisma.ticket.findFirst({
        where : {id},
    })
     
}

// async function postTicket(
//     status:string,
//     ticketTypeId: number,
//     enrollmentId: number,
//     TicketType:{
//         name:string,
//         price:number,
//         isRemote:boolean,
//         includesHotel:boolean,
//     }
// ){
//     return await prisma.ticket.create({
//     data : {
//     status,
//     ticketTypeId,
//     enrollmentId,
//     TicketType:{
//         name,
//         price,
//         isRemote,
//         includesHotel
//     }
//     }
//     })

// } 



const ticketsRepository ={
    getTicketsByType,
    // getTickets,
    // postTicket
}


export default ticketsRepository;