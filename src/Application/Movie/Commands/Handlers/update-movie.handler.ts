import { ICommandHandler, CommandHandler } from '@nestjs/cqrs';
import { MovieRepository } from '../../../../Infrastructure/Repository/movie.repository';
import { UpdateMovieCommand } from '../Impl/update-movie.command';

@CommandHandler(UpdateMovieCommand)
export class UpdateMovieHandler implements ICommandHandler<UpdateMovieCommand> {
  constructor(private readonly movieRepository: MovieRepository) {}

  async execute(movie: UpdateMovieCommand) {
    return this.movieRepository.updateMovie(movie);
  }
}
