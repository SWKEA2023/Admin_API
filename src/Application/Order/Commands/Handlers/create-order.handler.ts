import { ICommandHandler, CommandHandler } from '@nestjs/cqrs';
import { CreateOrderCommand } from '../Impl/create-order.command';
import { OrderRepository } from '../../../../Infrastructure/Repository/order.repository';

@CommandHandler(CreateOrderCommand)
export class CreateOrderHandler implements ICommandHandler<CreateOrderCommand> {
  constructor(private readonly orderRepository: OrderRepository) {}

  async execute(command: CreateOrderCommand) {
    return this.orderRepository.createOrder(command);
  }
}
