import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Ticket } from '../../Domain/Entities/Ticket';
import { CreateTicketCommand } from 'src/Application/Ticket/Commands/Impl/create-ticket.command';
import { UpdateTicketCommand } from 'src/Application/Ticket/Commands/Impl/update-ticket.command';

@Injectable()
export class TicketRepository {
  constructor(
    @InjectRepository(Ticket)
    private readonly ticketRepository: Repository<Ticket>,
  ) {}

  async createTicket(ticket: CreateTicketCommand) {
    return this.ticketRepository.save(ticket);
  }

  async getTicket(ticketId: number) {
    return this.ticketRepository.findOneBy({ ticketId: ticketId });
  }

  async getTickets() {
    return this.ticketRepository.find();
  }

  async updateTicket(ticket: UpdateTicketCommand) {
    return this.ticketRepository.save(ticket);
  }

  async deleteTicket(ticketId: number) {
    return this.ticketRepository.delete(ticketId);
  }
}
