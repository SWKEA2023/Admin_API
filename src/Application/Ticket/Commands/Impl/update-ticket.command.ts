import { Ticket } from 'src/Domain/Entities/Ticket';

export class UpdateTicketCommand {
  constructor(public ticket: Ticket) {}
}
