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

  @Get('es')
  @ApiOperation({ summary: 'Send all movies to ES' })
  @ApiResponse({
    status: 200,
    description: 'Gets all movies from database and sends them to ES via RabbitMQ',
    type: '',
    isArray: true,
  })
  async getMoviesEs() {
    const response = await this.movieService.getMovies();
    this.client.emit('InsertMovies', response);
  }

  @Post('update')
  @ApiOperation({ summary: 'Update movie' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  async updateMovie(@Body() movie: Movie) {
    const response = await this.movieService.updateMovie(movie);
    this.client.emit('movie_updated', response);
    return response;
  }

  @Post(':id')
  @ApiOperation({ summary: 'Delete movie' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  async deleteMovie(@Param('id') movieId: number) {
    const response = await this.movieService.deleteMovie(movieId);
    this.client.emit('movie_deleted', response);
    return response;
  }
}
