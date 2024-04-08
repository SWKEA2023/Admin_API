import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { CreateMovieCommand } from '../../Application/Movie/Commands/Impl/create-movie.command';
import { Movie } from '../../Domain/Entities/Movie';
import { GetMovieQuery } from '../../Application/Movie/Queries/Impl/get-movie.query';
import { GetMoviesQuery } from '../../Application/Movie/Queries/Impl/get-movies.query';

@Controller('movie')
export class MovieController {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  @Post()
  async createMovie(@Body() movie: Movie) {
    return this.commandBus.execute(
      new CreateMovieCommand(movie.movieId, movie.title, movie.duration),
    );
  }

  @Get(':id')
  async getMovie(@Param('id') id: number) {
    return this.queryBus.execute(new GetMovieQuery(id));
  }

  @Get()
  async getMovies() {
    return this.queryBus.execute(new GetMoviesQuery());
  }
}
