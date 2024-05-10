import { Order } from 'src/Domain/Entities/Order';

export class UpdateOrderCommand {
  constructor(public readonly order: Order) {}
}
