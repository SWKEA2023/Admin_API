import { CommandHandler, IQueryHandler } from '@nestjs/cqrs';
import { DeleteScreeningCommand } from '../Impl/delete-screening.command';
import { ScreeningRepository } from '../../../../Infrastructure/Repository/screening.repository';
import { HallRepository } from 'src/Infrastructure/Repository/hall.repository';
import { MovieRepository } from 'src/Infrastructure/Repository/movie.repository';

@CommandHandler(DeleteScreeningCommand)
export class DeleteScreeningHandler
  implements IQueryHandler<DeleteScreeningCommand>
{
  constructor(
    private readonly screeningRepository: ScreeningRepository,
    private readonly hallRepository: HallRepository,
    private readonly movieRepository: MovieRepository,
  ) {}

  async execute(command: DeleteScreeningCommand) {
    try {
      const screening = await this.screeningRepository.getScreening(
        command.screenId,
      );

      if (!screening) {
        throw new Error('Screening not found by id');
      }

      const hall = screening.hall;
      const movie = screening.movie;

      // Delete the movie entity
      const deletedMovie = await this.movieRepository.deleteMovie(
        movie.movieId,
      );
      if (!deletedMovie) {
        throw new Error('Movie not deleted');
      }

      // Delete the hall entity
      const deletedHall = await this.hallRepository.deleteHall(hall.hallId);
      if (!deletedHall) {
        throw new Error('Hall not deleted');
      }

      // Delete the screening entity
      const deletedScreening = await this.screeningRepository.deleteScreening(
        screening.screeningId,
      );
      if (!deletedScreening) {
        throw new Error('Screening not deleted');
      }

      return deletedScreening;
    } catch (error) {
      throw new Error(`Failed to update screening: ${error.message}`);
    }
  }
}
