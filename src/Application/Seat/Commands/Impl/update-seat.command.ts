import { Seat } from 'src/Domain/Entities/Seat';

export class UpdateSeatCommand {
  constructor(public readonly seat: Seat) {}
}
