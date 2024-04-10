import { Body, Controller, Get, Inject, Param, Post } from '@nestjs/common';
import { MovieService } from '../../Domain/Service/movie.service';
import { Movie } from '../../Domain/Entities/Movie';
import { ClientProxy } from '@nestjs/microservices';
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

@ApiBearerAuth()
@ApiTags('Movies')
@Controller('movie')
export class MovieController {
  constructor(
    private readonly movieService: MovieService,
    @Inject('MOVIE_QUEUE')
    private readonly client: ClientProxy,
  ) {}

  @Post()
  @ApiOperation({ summary: 'Create movie' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiCreatedResponse({
    status: 201,
    type: Movie,
    description: 'The record has been successfully created',
  })
  async createMovie(@Body() movie: Movie) {
    const response = await this.movieService.createMovie(movie);
    this.client.emit('movie_created', response);
    return response;
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get movie by id' })
  @ApiResponse({
    status: 200,
    description: 'The found record',
    type: Movie,
  })
  async getMovie(@Param('id') movieId: number) {
    return this.movieService.getMovie(movieId);
  }

  @Get()
  @ApiOperation({ summary: 'Get all movies' })
  @ApiResponse({
    status: 200,
    description: 'The found records',
    type: Movie,
    isArray: true,
  })
  async getMovies() {
    return this.movieService.getMovies();
  }
}
