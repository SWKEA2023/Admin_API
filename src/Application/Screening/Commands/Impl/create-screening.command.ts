export class CreateScreeningCommand {
  constructor(
    public readonly date: Date,
    public readonly startTime: Date,
    public readonly endTime: Date,
    public readonly fkHallId: number,
    public readonly fkMovieId: number,
  ) {}
}
