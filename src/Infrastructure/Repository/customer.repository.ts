import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateCustomerCommand } from 'src/Application/Customer/Commands/Impl/create-customer.command';
import { UpdateCustomerCommand } from 'src/Application/Customer/Commands/Impl/update-customer.command';
import { Customer } from 'src/Domain/Entities/Customer';
import { Repository } from 'typeorm';

@Injectable()
export class CustomerRepository {
  constructor(
    @InjectRepository(Customer)
    private readonly customerRepository: Repository<Customer>,
  ) {}

  async createCustomer(customer: CreateCustomerCommand) {
    return this.customerRepository.save(customer);
  }

  async getCustomer(customerId: number) {
    return this.customerRepository.findOneBy({ customerId: customerId });
  }

  async getCustomers() {
    return this.customerRepository.find();
  }

  async updateCustomer(customer: UpdateCustomerCommand) {
    return this.customerRepository.save(customer);
  }

  async deleteCustomer(customerId: number) {
    return this.customerRepository.delete(customerId);
  }
}
