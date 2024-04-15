import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetTicketQuery } from '../Impl/get-ticket.query';
import { TicketRepository } from '../../../../Infrastructure/Repository/ticket.repository';

@QueryHandler(GetTicketQuery)
export class GetTicketHandler implements IQueryHandler<GetTicketQuery> {
  constructor(private readonly ticketRepository: TicketRepository) {}

  async execute(query: GetTicketQuery) {
    return this.ticketRepository.getTicket(query.ticketId);
  }
}
