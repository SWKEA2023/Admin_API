import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Movie } from '../../Domain/Entities/Movie';
import { CreateMovieCommand } from 'src/Application/Movie/Commands/Impl/create-movie.command';

@Injectable()
export class MovieRepository {
  constructor(
    @InjectRepository(Movie)
    private readonly movieRepository: Repository<Movie>,
  ) {}

  async createMovie(movie: CreateMovieCommand) {
    return this.movieRepository.save(movie);
  }

  async getMovie(movieId: number) {
    return this.movieRepository.findOneBy({ movieId: movieId });
  }

  async getMovies() {
    return this.movieRepository.find();
  }

  async updateMovie(movie: Movie) {
    console.log('Hello World from Movie Repository');
    movie;
  }

  async deleteMovie(movie: Movie) {
    console.log('Hello World from Movie Repository');
    movie;
  }
}
