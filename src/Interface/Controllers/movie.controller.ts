import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { MovieService } from '../../Domain/Service/movie.service';
import { Movie } from '../../Domain/Entities/Movie';

@Controller('movie')
export class MovieController {
  constructor(private readonly movieService: MovieService) {}

  @Post()
  async createMovie(@Body() movie: Movie) {
    return this.movieService.createMovie(movie);
  }

  @Get(':id')
  async getMovie(@Param('id') id: number) {
    return this.movieService.getMovie(id);
  }

  @Get()
  async getMovies() {
    return this.movieService.getMovies();
  }
}
