import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetTicketsQuery } from '../Impl/get-tickets.query';
import { TicketRepository } from 'src/Infrastructure/Repository/ticket.repository';

@QueryHandler(GetTicketsQuery)
export class GetTicketsHandler implements IQueryHandler<GetTicketsQuery> {
  constructor(private readonly ticketRepsitory: TicketRepository) {}

  async execute() {
    return this.ticketRepsitory.getTickets();
  }
}
