import { ICommandHandler, CommandHandler } from '@nestjs/cqrs';
import { ScreeningRepository } from '../../../../Infrastructure/Repository/screening.repository';
import { UpdateScreeningCommand } from '../Impl/update-screening.command';

@CommandHandler(UpdateScreeningCommand)
export class UpdateScreeningHandler
  implements ICommandHandler<UpdateScreeningCommand>
{
  constructor(private readonly screeningRepository: ScreeningRepository) {}

  async execute(movie: UpdateScreeningCommand) {
    return this.screeningRepository.updateScreening(movie);
  }
}
