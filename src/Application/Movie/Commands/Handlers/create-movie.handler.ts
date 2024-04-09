import { ICommandHandler, CommandHandler } from '@nestjs/cqrs';
import { CreateMovieCommand } from '../Impl/create-movie.command';
import { MovieRepository } from '../../../../Infrastructure/Repository/movie.repository';

@CommandHandler(CreateMovieCommand)
export class CreateMovieHandler implements ICommandHandler<CreateMovieCommand> {
  constructor(private readonly movieRepository: MovieRepository) {}

  async execute(command: CreateMovieCommand) {
    return this.movieRepository.createMovie(command);
  }
}
