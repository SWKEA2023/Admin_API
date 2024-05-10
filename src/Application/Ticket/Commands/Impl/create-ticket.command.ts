import { Ticket } from 'src/Domain/Entities/Ticket';

export class CreateTicketCommand {
  constructor(public ticket: Ticket) {}
}
