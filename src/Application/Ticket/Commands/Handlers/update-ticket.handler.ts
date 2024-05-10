import { ICommandHandler, CommandHandler } from '@nestjs/cqrs';
import { TicketRepository } from '../../../../Infrastructure/Repository/ticket.repository';
import { UpdateTicketCommand } from '../Impl/update-ticket.command';

@CommandHandler(UpdateTicketCommand)
export class UpdateTicketHandler
  implements ICommandHandler<UpdateTicketCommand>
{
  constructor(private readonly ticketRepository: TicketRepository) {}

  async execute(command: UpdateTicketCommand) {
    return this.ticketRepository.updateTicket(command.ticket);
  }
}
