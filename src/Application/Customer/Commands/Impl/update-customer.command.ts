export class UpdateCustomerCommand {
  constructor(
    public readonly customerId: number,
    public readonly firstName: string,
    public readonly lastName: string,
    public readonly email: string,
    public readonly phoneNumber: string,
  ) {}
}
