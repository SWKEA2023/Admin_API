import { CommandHandler } from '@nestjs/cqrs';
import { DeleteOrderCommand } from '../Impl/delete-order.command';
import { OrderRepository } from 'src/Infrastructure/Repository/order.repository';

@CommandHandler(DeleteOrderCommand)
export class DeleteOrderHandler {
  constructor(private readonly orderRepository: OrderRepository) {}

  async execute(command: DeleteOrderCommand) {
    return this.orderRepository.deleteOrder(command.orderId);
  }
}
