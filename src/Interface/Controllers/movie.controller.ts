import { Body, Controller, Get, Inject, Param, Post } from '@nestjs/common';
import { MovieService } from '../../Domain/Service/movie.service';
import { Movie } from '../../Domain/Entities/Movie';
import { ClientProxy } from '@nestjs/microservices';

@Controller('movie')
export class MovieController {
  constructor(
    private readonly movieService: MovieService,
    @Inject('MOVIE_QUEUE')
    private readonly client: ClientProxy,
  ) {}

  @Post()
  async createMovie(@Body() movie: Movie) {
    const response = await this.movieService.createMovie(movie);
    this.client.emit('movie_created', response);
    return response;
  }

  @Get(':id')
  async getMovie(@Param('id') movieId: number) {
    return this.movieService.getMovie(movieId);
  }

  @Get()
  async getMovies() {
    return this.movieService.getMovies();
  }
}
