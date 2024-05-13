import { ICommandHandler, CommandHandler } from '@nestjs/cqrs';
import { CreateTicketCommand } from '../Impl/create-ticket.command';
import { TicketRepository } from '../../../../Infrastructure/Repository/ticket.repository';
import { CustomerRepository } from 'src/Infrastructure/Repository/customer.repository';
import { OrderRepository } from 'src/Infrastructure/Repository/order.repository';
import { SeatRepository } from 'src/Infrastructure/Repository/seat.repository';

@CommandHandler(CreateTicketCommand)
export class CreateTicketHandler
  implements ICommandHandler<CreateTicketCommand>
{
  constructor(
    private readonly ticketRepository: TicketRepository,
    private readonly customerRepository: CustomerRepository,
    private readonly orderRepository: OrderRepository,
    private readonly seatRepository: SeatRepository,
  ) {}

  async execute(command: CreateTicketCommand) {
    // Customer
    const customerCreated = await this.customerRepository.createCustomer(
      command.ticket.order.customer,
    );
    command.ticket.order.customer = customerCreated;

    // Order
    const orderCreated = await this.orderRepository.createOrder(
      command.ticket.order,
    );
    command.ticket.order = orderCreated;

    // Seat
    command.ticket.seat.hall = command.ticket.screening.hall;
    const seatCreated = await this.seatRepository.createSeat(
      command.ticket.seat,
    );
    command.ticket.seat = seatCreated;

    // Ticket
    return this.ticketRepository.createTicket(command.ticket);
  }
}
