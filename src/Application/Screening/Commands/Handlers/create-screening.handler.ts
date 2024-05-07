import { ICommandHandler, CommandHandler } from '@nestjs/cqrs';
import { CreateScreeningCommand } from '../Impl/create-screening.command';
import { ScreeningRepository } from '../../../../Infrastructure/Repository/screening.repository';
import { HallRepository } from 'src/Infrastructure/Repository/hall.repository';
import { MovieRepository } from 'src/Infrastructure/Repository/movie.repository';

@CommandHandler(CreateScreeningCommand)
export class CreateScreeningHandler
  implements ICommandHandler<CreateScreeningCommand>
{
  constructor(
    private readonly screeningRepository: ScreeningRepository,
    private readonly hallRepository: HallRepository,
    private readonly movieRepository: MovieRepository,
  ) {}

  async execute(command: CreateScreeningCommand) {
    try {
      const hall = command.screening.hall;
      const movie = command.screening.movie;

      // Update the movie entity
      const updatedMovie = await this.movieRepository.createMovie(movie);
      if (!updatedMovie) {
        throw new Error('Movie not created');
      }

      // Update the hall entity
      const updatedHall = await this.hallRepository.createHall(hall);
      if (!updatedHall) {
        throw new Error('Hall not created');
      }

      // Update the screening entity
      const updatedScreening = await this.screeningRepository.createScreening(
        command.screening,
      );
      if (!updatedScreening) {
        throw new Error('Screening not created');
      }

      return updatedScreening;
    } catch (error) {
      throw new Error(`Failed to update screening: ${error.message}`);
    }
  }
}
