import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { CreateOrderCommand } from '../../Application/Order/Commands/Impl/create-order.command';
import { Order } from '../Entities/Order';
import { GetOrderQuery } from '../../Application/Order/Queries/Impl/get-order.query';
import { GetOrdersQuery } from '../../Application/Order/Queries/Impl/get-orders.query';
import { Injectable } from '@nestjs/common';
import { UpdateOrderCommand } from 'src/Application/Order/Commands/Impl/update-order.command';
import { DeleteOrderCommand } from 'src/Application/Order/Commands/Impl/delete-order.command';

@Injectable()
export class OrderService {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  async createOrder(order: Order) {
    return this.commandBus.execute(new CreateOrderCommand(order));
  }

  async getOrder(orderId: number) {
    return this.queryBus.execute(new GetOrderQuery(orderId));
  }

  async getOrders() {
    return this.queryBus.execute(new GetOrdersQuery());
  }

  async updateOrder(order: Order) {
    return this.commandBus.execute(new UpdateOrderCommand(order));
  }

  async deleteOrder(orderId: number) {
    return this.commandBus.execute(new DeleteOrderCommand(orderId));
  }
}
