import { ICommandHandler, CommandHandler } from '@nestjs/cqrs';
import { CreateTicketCommand } from '../Impl/create-ticket.command';
import { TicketRepository } from '../../../../Infrastructure/Repository/ticket.repository';

@CommandHandler(CreateTicketCommand)
export class CreateTicketHandler
  implements ICommandHandler<CreateTicketCommand>
{
  constructor(private readonly ticketRepository: TicketRepository) {}

  async execute(command: CreateTicketCommand) {
    return this.ticketRepository.createTicket(command.ticket);
  }
}
