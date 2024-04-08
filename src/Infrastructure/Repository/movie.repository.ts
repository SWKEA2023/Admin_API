import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Movie } from '../../Domain/Entities/Movie';

@Injectable()
export class MovieRepository {
  constructor(
    @InjectRepository(Movie)
    private readonly movieRepository: Repository<Movie>,
  ) {}

  async createMovie(movie: Movie) {
    console.log('Hello World from Movie Repository');
    movie;
  }

  async getMovie(movieId: number) {
    return this.movieRepository.findOneBy({ id: movieId });
  }

  async getMovies() {}

  async updateMovie(movie: Movie) {
    console.log('Hello World from Movie Repository');
    movie;
  }

  async deleteMovie(movie: Movie) {
    console.log('Hello World from Movie Repository');
    movie;
  }
}
