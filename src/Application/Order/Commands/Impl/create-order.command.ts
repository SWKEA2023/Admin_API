import { Order } from 'src/Domain/Entities/Order';

export class CreateOrderCommand {
  constructor(public readonly order: Order) {}
}
