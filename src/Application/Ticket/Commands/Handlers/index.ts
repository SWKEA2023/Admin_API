import { CreateTicketHandler } from './create-ticket.handler';
import { UpdateTicketHandler } from './update-ticket.handler';
import { DeleteTicketHandler } from './delete-ticket.handler';

export const CommandHandlers = [
  CreateTicketHandler,
  UpdateTicketHandler,
  DeleteTicketHandler,
];
