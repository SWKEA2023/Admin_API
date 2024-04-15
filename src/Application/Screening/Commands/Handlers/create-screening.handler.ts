import { ICommandHandler, CommandHandler } from '@nestjs/cqrs';
import { CreateScreeningCommand } from '../Impl/create-screening.command';
import { ScreeningRepository } from '../../../../Infrastructure/Repository/screening.repository';

@CommandHandler(CreateScreeningCommand)
export class CreateScreeningHandler
  implements ICommandHandler<CreateScreeningCommand>
{
  constructor(private readonly screeningRepository: ScreeningRepository) {}

  async execute(command: CreateScreeningCommand) {
    return this.screeningRepository.createScreening(command);
  }
}
