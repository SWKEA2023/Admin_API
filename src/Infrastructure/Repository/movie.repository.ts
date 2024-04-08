import { Injectable } from '@nestjs/common';
import { Movie } from '../../Domain/Entities/Movie';

@Injectable()
export class MovieRepository {
  async createMovie(movie: Movie) {
    console.log('Hello World from Movie Repository');
    movie;
  }

  async getMovie() {
    console.log('Hello World from Movie Repository');
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
