import { ICommandHandler, CommandHandler } from '@nestjs/cqrs';
import { OrderRepository } from '../../../../Infrastructure/Repository/order.repository';
import { UpdateOrderCommand } from '../Impl/update-order.command';

@CommandHandler(UpdateOrderCommand)
export class UpdateOrderHandler implements ICommandHandler<UpdateOrderCommand> {
  constructor(private readonly orderRepository: OrderRepository) {}

  async execute(command: UpdateOrderCommand) {
    return this.orderRepository.updateOrder(command.order);
  }
}
