import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { CustomerRepository } from 'src/Infrastructure/Repository/customer.repository';
import { GetCustomersQuery } from '../Impl/get-customers.query';

@QueryHandler(GetCustomersQuery)
export class GetCustomersHandler implements IQueryHandler<GetCustomersQuery> {
  constructor(private readonly customerRepository: CustomerRepository) {}

  async execute() {
    return this.customerRepository.getCustomers();
  }
}
