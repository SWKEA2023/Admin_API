import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetMoviesQuery } from '../Impl/get-movies.query';
import { MovieRepository } from 'src/Infrastructure/Repository/movie.repository';

@QueryHandler(GetMoviesQuery)
export class GetMoviesHandler implements IQueryHandler<GetMoviesQuery> {
  constructor(private readonly movieRepository: MovieRepository) {}

  async execute() {
    return this.movieRepository.getMovies();
  }
}
