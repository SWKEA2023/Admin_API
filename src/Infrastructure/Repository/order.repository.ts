import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Order } from 'src/Domain/Entities/Order';
import { Repository } from 'typeorm';

@Injectable()
export class OrderRepository {
  constructor(
    @InjectRepository(Order)
    private readonly orderRepository: Repository<Order>,
  ) {}

  async createOrder(order: Order) {
    return this.orderRepository.save(order);
  }

  async getOrder(orderId: number) {
    return this.orderRepository.findOneBy({ orderId: orderId });
  }

  async getOrders() {
    return this.orderRepository.find();
  }

  async updateOrder(order: Order) {
    return this.orderRepository.save(order);
  }

  async deleteOrder(orderId: number) {
    return this.orderRepository.delete(orderId);
  }
}
