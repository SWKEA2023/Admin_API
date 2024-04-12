import { CommandHandler, IQueryHandler } from '@nestjs/cqrs';
import { DeleteMovieCommand } from '../Impl/delete-movie.command';
import { MovieRepository } from '../../../../Infrastructure/Repository/movie.repository';

@CommandHandler(DeleteMovieCommand)
export class DeleteMovieHandler implements IQueryHandler<DeleteMovieCommand> {
  constructor(private readonly movieRepository: MovieRepository) {}

  async execute(query: DeleteMovieCommand) {
    return this.movieRepository.deleteMovie(query.movieId);
  }
}
