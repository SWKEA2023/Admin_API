import { CreateCustomerHandler } from './create-customer.handler';
import { UpdateCustomerHandler } from './update-customer.handler';
import { DeleteCustomerHandler } from './delete-customer.handler';

export const CommandHandlers = [
  CreateCustomerHandler,
  UpdateCustomerHandler,
  DeleteCustomerHandler,
];
