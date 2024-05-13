import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { CreateTicketCommand } from '../../Application/Ticket/Commands/Impl/create-ticket.command';
import { Ticket } from '../Entities/Ticket';
import { GetTicketsQuery } from '../../Application/Ticket/Queries/Impl/get-tickets.query';
import { GetTicketQuery } from '../../Application/Ticket/Queries/Impl/get-ticket.query';
import { Injectable } from '@nestjs/common';
import { UpdateTicketCommand } from 'src/Application/Ticket/Commands/Impl/update-ticket.command';
import { DeleteTicketCommand } from 'src/Application/Ticket/Commands/Impl/delete-ticket.command';

@Injectable()
export class TicketService {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  async createTicket(ticket: Ticket) {
    return this.commandBus.execute(new CreateTicketCommand(ticket));
  }

  async getTicket(ticketId: number) {
    return this.queryBus.execute(new GetTicketQuery(ticketId));
  }

  async getTickets() {
    return this.queryBus.execute(new GetTicketsQuery());
  }

  async updateTicket(ticket: Ticket) {
    return this.commandBus.execute(new UpdateTicketCommand(ticket));
  }

  async deleteTicket(ticketId: number) {
    return this.commandBus.execute(new DeleteTicketCommand(ticketId));
  }
}
