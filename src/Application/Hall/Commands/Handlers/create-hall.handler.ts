import { ICommandHandler, CommandHandler } from '@nestjs/cqrs';
import { CreateHallCommand } from '../Impl/create-hall.command';
import { HallRepository } from 'src/Infrastructure/Repository/hall.repository';

@CommandHandler(CreateHallCommand)
export class CreateHallHandler implements ICommandHandler<CreateHallCommand> {
  constructor(private readonly hallRepository: HallRepository) {}

  async execute(command: CreateHallCommand) {
    return this.hallRepository.createHall(command);
  }
}
