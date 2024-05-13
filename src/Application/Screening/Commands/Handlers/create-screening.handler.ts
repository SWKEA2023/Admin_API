import { ICommandHandler, CommandHandler } from '@nestjs/cqrs';
import { CreateScreeningCommand } from '../Impl/create-screening.command';
import { ScreeningRepository } from '../../../../Infrastructure/Repository/screening.repository';
import { HallRepository } from 'src/Infrastructure/Repository/hall.repository';
import { MovieRepository } from 'src/Infrastructure/Repository/movie.repository';
import { Screening } from 'src/Domain/Entities/Screening';

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
      // const hall = command.screening.hall;
      // const movie = command.screening.movie;

      // // Create the movie entity
      // const createdMovie = await this.movieRepository.createMovie(movie);
      // if (!createdMovie) {
      //   throw new Error('Movie not created');
      // }

      // // Create the hall entity
      // const createdHall = await this.hallRepository.createHall(hall);
      // if (!createdHall) {
      //   throw new Error('Hall not created');
      // }

      const hall = await this.hallRepository.getHall(command.screening.hallId);
      const movie = await this.movieRepository.getMovie(
        command.screening.movieId,
      );

      const screening = new Screening();
      screening.hall = hall;
      screening.movie = movie;
      screening.startTime = command.screening.startTime;
      screening.endTime = command.screening.endTime;

      // Create the screening entity
      const createdScreening =
        await this.screeningRepository.createScreening(screening);
      if (!createdScreening) {
        throw new Error('Screening not created');
      }

      return createdScreening;
    } catch (error) {
      throw new Error(`Failed to update screening: ${error.message}`);
    }
  }
}
