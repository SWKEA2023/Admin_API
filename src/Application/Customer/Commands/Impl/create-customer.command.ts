import { Customer } from "src/Domain/Entities/Customer";

export class CreateCustomerCommand {
  constructor(public readonly customer: Customer) {}
}
