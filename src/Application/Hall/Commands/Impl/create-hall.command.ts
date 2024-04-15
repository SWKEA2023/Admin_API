export class CreateHallCommand {
  constructor(
    public readonly hallName: string,
    public readonly seatRows: number,
    public readonly seatNumber: number,
  ) {}
}
