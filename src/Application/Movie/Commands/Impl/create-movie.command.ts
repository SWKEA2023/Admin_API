export class CreateMovieCommand {
  constructor(
    public readonly movieId: number,
    public readonly title: string,
    public readonly duration: number,
  ) {}
}
