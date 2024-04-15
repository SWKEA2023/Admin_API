import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { DeleteCustomerCommand } from '../Impl/delete-customer.command';
import { CustomerRepository } from 'src/Infrastructure/Repository/customer.repository';

@CommandHandler(DeleteCustomerCommand)
export class DeleteCustomerHandler
  implements ICommandHandler<DeleteCustomerCommand>
{
  constructor(private readonly customerRepository: CustomerRepository) {}

  async execute(command: DeleteCustomerCommand) {
    return this.customerRepository.deleteCustomer(command.customerId);
  }
}
