import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateOrderCommand } from 'src/Application/Order/Commands/Impl/create-order.command';
import { UpdateOrderCommand } from 'src/Application/Order/Commands/Impl/update-order.command';
import { Order } from 'src/Domain/Entities/Order';
import { Repository } from 'typeorm';

@Injectable()
export class OrderRepository {
  constructor(
    @InjectRepository(Order)
    private readonly orderRepository: Repository<Order>,
  ) {}

  async createOrder(order: CreateOrderCommand) {
    return this.orderRepository.save(order);
  }

  async getOrder(orderId: number) {
    return this.orderRepository.findOneBy({ orderId: orderId });
  }

  async getOrders() {
    return this.orderRepository.find();
  }

  async updateOrder(order: UpdateOrderCommand) {
    return this.orderRepository.save(order);
  }

  async deleteOrder(orderId: number) {
    return this.orderRepository.delete(orderId);
  }
}
