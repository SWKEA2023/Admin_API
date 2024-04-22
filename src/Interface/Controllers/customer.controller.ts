import { Body, Controller, Get, Inject, Param, Post } from '@nestjs/common';
import { CustomerService } from '../../Domain/Service/customer.service';
import { Customer } from '../../Domain/Entities/Customer';
import { ClientProxy } from '@nestjs/microservices';
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

@ApiBearerAuth()
@ApiTags('Customers')
@Controller('customer')
export class CustomerController {
  constructor(
    private readonly customerService: CustomerService,
    @Inject('CUSTOMER_QUEUE')
    private readonly client: ClientProxy,
  ) {}

  @Post()
  @ApiOperation({ summary: 'Create customer' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiCreatedResponse({
    status: 201,
    type: Customer,
    description: 'The record has been successfully created',
  })
  async createCustomer(@Body() customer: Customer) {
    const response = await this.customerService.createCustomer(customer);
    this.client.emit('customer_created', response);
    return response;
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get customer by id' })
  @ApiResponse({
    status: 200,
    description: 'The found record',
    type: Customer,
  })
  async getCustomer(@Param('id') customerId: number) {
    return this.customerService.getCustomer(customerId);
  }

  @Get()
  @ApiOperation({ summary: 'Get all customers' })
  @ApiResponse({
    status: 200,
    description: 'The found records',
    type: Customer,
    isArray: true,
  })
  async getCustomers() {
    return this.customerService.getCustomers();
  }

  @Post('update')
  @ApiOperation({ summary: 'Update customer' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  async updateCustomer(@Body() customer: Customer) {
    const response = await this.customerService.updateCustomer(customer);
    this.client.emit('customer_updated', response);
    return response;
  }

  @Post(':id')
  @ApiOperation({ summary: 'Delete customer' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  async deleteCustomer(@Param('id') customerId: number) {
    const response = await this.customerService.deleteCustomer(customerId);
    this.client.emit('customer_deleted', response);
    return response;
  }
}
