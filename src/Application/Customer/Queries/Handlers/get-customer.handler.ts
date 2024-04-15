import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetCustomerQuery } from '../Impl/get-customer.query';
import { CustomerRepository } from 'src/Infrastructure/Repository/customer.repository';

@QueryHandler(GetCustomerQuery)
export class GetCustomerHandler implements IQueryHandler<GetCustomerQuery> {
  constructor(private readonly customerRepository: CustomerRepository) {}

  async execute(query: GetCustomerQuery) {
    return this.customerRepository.getCustomer(query.customerId);
  }
}
