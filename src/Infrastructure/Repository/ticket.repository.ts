import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Ticket } from '../../Domain/Entities/Ticket';
@Injectable()
export class TicketRepository {
  constructor(
    @InjectRepository(Ticket)
    private readonly ticketRepository: Repository<Ticket>,
  ) {}

  async createTicket(ticket: Ticket) {
    const ticketCreated = await this.ticketRepository.save(ticket);
    return ticketCreated;
  }

  async getTicket(ticketId: number) {
    return this.ticketRepository.findOneBy({ ticketId: ticketId });
  }

  async getTickets() {
    return this.ticketRepository.find();
  }

  async updateTicket(ticket: Ticket) {
    return this.ticketRepository.save(ticket);
  }

  async deleteTicket(ticketId: number) {
    return this.ticketRepository.delete(ticketId);
  }
}
