import { Body, Controller, Get, Inject, Param, Post } from '@nestjs/common';
import { OrderService } from '../../Domain/Service/order.service';
import { Order } from '../../Domain/Entities/Order';
import { ClientProxy } from '@nestjs/microservices';
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

@ApiBearerAuth()
@ApiTags('Orders')
@Controller('order')
export class OrderController {
  constructor(
    private readonly orderService: OrderService,
    @Inject('ORDER_QUEUE')
    private readonly client: ClientProxy,
  ) {}

  @Post()
  @ApiOperation({ summary: 'Create order' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiCreatedResponse({
    status: 201,
    type: Order,
    description: 'The record has been successfully created',
  })
  async createOrder(@Body() order: Order) {
    const response = await this.orderService.createOrder(order);
    this.client.emit('Order_created', response);
    return response;
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get order by id' })
  @ApiResponse({
    status: 200,
    description: 'The found record',
    type: Order,
  })
  async getOrder(@Param('id') orderId: number) {
    return this.orderService.getOrder(orderId);
  }

  @Get()
  @ApiOperation({ summary: 'Get all orders' })
  @ApiResponse({
    status: 200,
    description: 'The found records',
    type: Order,
    isArray: true,
  })
  async getOrders() {
    return this.orderService.getOrders();
  }

  @Post('update')
  @ApiOperation({ summary: 'Update order' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  async updateOrder(@Body() order: Order) {
    const response = await this.orderService.updateOrder(order);
    this.client.emit('Order_updated', response);
    return response;
  }

  @Post(':id')
  @ApiOperation({ summary: 'Delete order' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  async deleteOrder(@Param('id') orderId: number) {
    const response = await this.orderService.getOrder(orderId);
    this.client.emit('Order_deleted', response);
    return response;
  }
}
