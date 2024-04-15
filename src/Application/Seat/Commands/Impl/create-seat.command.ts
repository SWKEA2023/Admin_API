export class CreateSeatCommand {
  constructor(
    public readonly seatNumber: number,
    public readonly seatRow: number,
    public readonly price: number,
    public readonly fkHallId: number,
  ) {}
}
