import { Seat } from 'src/Domain/Entities/Seat';

export class CreateSeatCommand {
  constructor(public readonly seat: Seat) {}
}
