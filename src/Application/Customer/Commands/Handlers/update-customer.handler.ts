import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { UpdateCustomerCommand } from '../Impl/update-customer.command';
import { CustomerRepository } from 'src/Infrastructure/Repository/customer.repository';

@CommandHandler(UpdateCustomerCommand)
export class UpdateCustomerHandler
  implements ICommandHandler<UpdateCustomerCommand>
{
  constructor(private readonly customerRepository: CustomerRepository) {}

  async execute(command: UpdateCustomerCommand) {
    return this.customerRepository.updateCustomer(command);
  }
}
