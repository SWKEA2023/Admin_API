export class UpdateScreeningCommand {
  constructor(
    public readonly screeningId: number,
    public readonly date: Date,
    public readonly startTime: Date,
    public readonly endTime: Date,
    public readonly fkHallId: number,
    public readonly fkMovieId: number,
  ) {}
}
