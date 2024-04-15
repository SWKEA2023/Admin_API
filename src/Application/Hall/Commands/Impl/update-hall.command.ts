export class UpdateHallCommand {
  constructor(
    public readonly hallId: number,
    public readonly hallName: string,
    public readonly seatRows: number,
    public readonly seatNumber: number,
  ) {}
}
