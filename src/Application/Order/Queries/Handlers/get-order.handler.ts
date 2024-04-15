import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetOrderQuery } from '../Impl/get-order.query';
import { OrderRepository } from '../../../../Infrastructure/Repository/order.repository';

@QueryHandler(GetOrderQuery)
export class GetOrderHandler implements IQueryHandler<GetOrderQuery> {
  constructor(private readonly orderRepository: OrderRepository) {}

  async execute(query: GetOrderQuery) {
    return this.orderRepository.getOrder(query.orderId);
  }
}
