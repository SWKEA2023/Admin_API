import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CreateCustomerCommand } from '../Impl/create-customer.command';
import { CustomerRepository } from 'src/Infrastructure/Repository/customer.repository';

@CommandHandler(CreateCustomerCommand)
export class CreateCustomerHandler
  implements ICommandHandler<CreateCustomerCommand>
{
  constructor(private readonly customerRepository: CustomerRepository) {}

  async execute(command: CreateCustomerCommand) {
    return this.customerRepository.createCustomer(command.customer);
  }
}
