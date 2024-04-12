export class UpdateHallCommand {
  constructor(
    public readonly hallId: number,
    public readonly name: string,
    public readonly capacity: number,
  ) {}
}
