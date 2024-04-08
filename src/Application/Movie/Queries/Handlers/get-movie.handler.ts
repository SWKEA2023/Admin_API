import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetMovieQuery } from '../Impl/get-movie.query';
import { MovieRepository } from '../../../../Infrastructure/Repository/movie.repository';

@QueryHandler(GetMovieQuery)
export class GetMovieHandler implements IQueryHandler<GetMovieQuery> {
  constructor(private readonly movieRepository: MovieRepository) {}

  async execute(query: GetMovieQuery) {
    console.log('THIS IS MOVIE ID: ', query.movieId);
    this.movieRepository.getMovie(query.movieId);
  }
}
