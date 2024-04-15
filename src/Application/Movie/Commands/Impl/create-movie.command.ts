export class CreateMovieCommand {
  constructor(
    public readonly title: string,
    public readonly year: number,
    public readonly language: string,
    public readonly duration: number,
    public readonly director: string,
    public readonly pegi: number,
    public readonly imageURL: string,
    public readonly trailerURL: string,
  ) {}
}
