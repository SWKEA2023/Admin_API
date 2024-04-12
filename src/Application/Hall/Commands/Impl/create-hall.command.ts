export class CreateHallCommand {
  constructor(
    public readonly name: string,
    public readonly capacity: number,
  ) {}
}
