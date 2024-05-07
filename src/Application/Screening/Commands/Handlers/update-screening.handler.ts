import { ICommandHandler, CommandHandler } from '@nestjs/cqrs';
import { ScreeningRepository } from '../../../../Infrastructure/Repository/screening.repository';
import { UpdateScreeningCommand } from '../Impl/update-screening.command';
import { HallRepository } from 'src/Infrastructure/Repository/hall.repository';
import { MovieRepository } from 'src/Infrastructure/Repository/movie.repository';

@CommandHandler(UpdateScreeningCommand)
export class UpdateScreeningHandler
  implements ICommandHandler<UpdateScreeningCommand>
{
  constructor(
    private readonly screeningRepository: ScreeningRepository,
    private readonly hallRepository: HallRepository,
    private readonly movieRepository: MovieRepository,
  ) {}

  async execute(screening: UpdateScreeningCommand) {
    try {
      const hall = screening.screening.hall;
      const movie = screening.screening.movie;

      // Update the movie entity
      const updatedMovie = await this.movieRepository.updateMovie(movie);
      if (!updatedMovie) {
        throw new Error('Movie not found');
      }

      // Update the hall entity
      const updatedHall = await this.hallRepository.updateHall(hall);
      if (!updatedHall) {
        throw new Error('Hall not found');
      }

      // Update the screening entity
      const updatedScreening =
        await this.screeningRepository.updateScreening(screening);
      if (!updatedScreening) {
        throw new Error('Screening not found');
      }

      return updatedScreening;
    } catch (error) {
      throw new Error(`Failed to update screening: ${error.message}`);
    }
  }
}
