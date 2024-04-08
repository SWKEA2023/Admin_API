import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { CreateMovieCommand } from '../../Application/Movie/Commands/Impl/create-movie.command';
import { Movie } from '../../Domain/Entities/Movie';
import { GetMovieQuery } from '../../Application/Movie/Queries/Impl/get-movie.query';
import { GetMoviesQuery } from '../../Application/Movie/Queries/Impl/get-movies.query';

export class MovieService {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  async createMovie(movie: Movie) {
    return this.commandBus.execute(
      new CreateMovieCommand(movie.id, movie.title, movie.duration),
    );
  }

  async getMovie(id: number) {
    return this.queryBus.execute(new GetMovieQuery(id));
  }

  async getMovies() {
    return this.queryBus.execute(new GetMoviesQuery());
  }
}
