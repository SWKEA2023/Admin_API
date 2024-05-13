import { Injectable } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { CreateCustomerCommand } from 'src/Application/Customer/Commands/Impl/create-customer.command';
import { DeleteCustomerCommand } from 'src/Application/Customer/Commands/Impl/delete-customer.command';
import { UpdateCustomerCommand } from 'src/Application/Customer/Commands/Impl/update-customer.command';
import { GetCustomerQuery } from 'src/Application/Customer/Queries/Impl/get-customer.query';
import { GetCustomersQuery } from 'src/Application/Customer/Queries/Impl/get-customers.query';
import { Customer } from '../Entities/Customer';

@Injectable()
export class CustomerService {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  async createCustomer(customer: Customer) {
    return this.commandBus.execute(
      new CreateCustomerCommand(customer),
    );
  }

  async getCustomer(customerId: number) {
    return this.queryBus.execute(new GetCustomerQuery(customerId));
  }

  async getCustomers() {
    return this.queryBus.execute(new GetCustomersQuery());
  }

  async updateCustomer(customer: Customer) {
    return this.commandBus.execute(
      new UpdateCustomerCommand(
        customer.customerId,
        customer.firstName,
        customer.lastName,
        customer.email,
        customer.phoneNumber,
      ),
    );
  }

  async deleteCustomer(customerId: number) {
    return this.commandBus.execute(new DeleteCustomerCommand(customerId));
  }
}
