import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { CreateMovieCommand } from '../../Application/Movie/Commands/Impl/create-movie.command';
import { Movie } from '../../Domain/Entities/Movie';
import { GetMovieQuery } from '../../Application/Movie/Queries/Impl/get-movie.query';
import { GetMoviesQuery } from '../../Application/Movie/Queries/Impl/get-movies.query';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Movie as MovieEntity } from '../../Domain/Entities/Movie';

@Injectable()
export class MovieService {
  constructor(
    @InjectRepository(MovieEntity)
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  async createMovie(movie: Movie) {
    return this.commandBus.execute(
      new CreateMovieCommand(movie.id, movie.title, movie.duration),
    );
  }

  async getMovie(movieId: number) {
    return this.queryBus.execute(new GetMovieQuery(movieId));
  }

  async getMovies() {
    return this.queryBus.execute(new GetMoviesQuery());
  }
}
