import { CommandHandler, IQueryHandler } from '@nestjs/cqrs';
import { DeleteTicketCommand } from '../Impl/delete-ticket.command';
import { TicketRepository } from '../../../../Infrastructure/Repository/ticket.repository';

@CommandHandler(DeleteTicketCommand)
export class DeleteTicketHandler implements IQueryHandler<DeleteTicketCommand> {
  constructor(private readonly ticketRepository: TicketRepository) {}

  async execute(query: DeleteTicketCommand) {
    return this.ticketRepository.deleteTicket(query.ticketId);
  }
}
