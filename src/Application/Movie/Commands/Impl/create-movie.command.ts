export class CreateMovieCommand {
  constructor(
    public readonly title: string,
    public readonly duration: number,
  ) {}
}
