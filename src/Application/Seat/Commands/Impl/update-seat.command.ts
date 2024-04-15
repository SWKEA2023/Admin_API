export class UpdateSeatCommand {
  constructor(
    public readonly seatId: number,
    public readonly seatNumber: number,
    public readonly seatRow: number,
    public readonly price: number,
    public readonly fkHallId: number,
  ) {}
}
