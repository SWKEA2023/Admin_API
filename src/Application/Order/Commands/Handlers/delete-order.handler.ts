import { CommandHandler, IQueryHandler } from '@nestjs/cqrs';
import { DeleteOrderCommand } from '../Impl/delete-order.command';
import { OrderRepository } from '../../../../Infrastructure/Repository/Order.repository';

@CommandHandler(DeleteOrderCommand)
export class DeleteOrderHandler implements IQueryHandler<DeleteOrderCommand> {
  constructor(private readonly orderRepository: OrderRepository) {}

  async execute(query: DeleteOrderCommand) {
    return this.orderRepository.deleteOrder(query.orderId);
  }
}
