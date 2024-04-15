import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetOrdersQuery } from '../Impl/get-orders.query';
import { OrderRepository } from 'src/Infrastructure/Repository/order.repository';

@QueryHandler(GetOrdersQuery)
export class GetOrdersHandler implements IQueryHandler<GetOrdersQuery> {
  constructor(private readonly OrderRepsitory: OrderRepository) {}

  async execute() {
    return this.OrderRepsitory.getOrders();
  }
}
