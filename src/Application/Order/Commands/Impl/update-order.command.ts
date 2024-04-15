export class UpdateOrderCommand {
  constructor(
    public readonly orderId: number,
    public readonly fkCustomerId: number,
  ) {}
}
