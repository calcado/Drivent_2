import { prisma } from "@/config";
import { Tickets } from "@/protocols";
import { Ticket } from "@prisma/client";

async function getTicketsByType(){
    return await prisma.ticketType.findMany();
}

// async function getTickets( ticket: Ticket) {
//     return await prisma.ticket.findFirst({
//         where : ticket.id
//     })
     
// }

async function postTicket(ticket: Ticket){
    return await prisma.ticket.create({]
    data : {

    }
    })

} 



const ticketsRepository ={
    getTicketsByType,
    // getTickets,
    // postTicket
}


export default ticketsRepository;