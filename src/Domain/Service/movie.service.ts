import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { CreateMovieCommand } from '../../Application/Movie/Commands/Impl/create-movie.command';
import { Movie } from '../../Domain/Entities/Movie';
import { GetMovieQuery } from '../../Application/Movie/Queries/Impl/get-movie.query';
import { GetMoviesQuery } from '../../Application/Movie/Queries/Impl/get-movies.query';
import { Injectable } from '@nestjs/common';
import { UpdateMovieCommand } from 'src/Application/Movie/Commands/Impl/update-movie.command';
import { DeleteMovieCommand } from 'src/Application/Movie/Commands/Impl/delete-movie.command';

@Injectable()
export class MovieService {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  async createMovie(movie: Movie) {
    return this.commandBus.execute(
      new CreateMovieCommand(movie.title, movie.duration),
    );
  }

  async getMovie(movieId: number) {
    return this.queryBus.execute(new GetMovieQuery(movieId));
  }

  async getMovies() {
    return this.queryBus.execute(new GetMoviesQuery());
  }

  async updateMovie(movie: Movie) {
    return this.commandBus.execute(
      new UpdateMovieCommand(movie.movieId, movie.title, movie.duration),
    );
  }

  async deleteMovie(movieId: number) {
    return this.commandBus.execute(new DeleteMovieCommand(movieId));
  }
}
