import { ICommandHandler, CommandHandler } from '@nestjs/cqrs';
import { HallRepository } from '../../../../Infrastructure/Repository/hall.repository';
import { UpdateHallCommand } from '../Impl/update-hall.command';

@CommandHandler(UpdateHallCommand)
export class UpdateHallHandler implements ICommandHandler<UpdateHallCommand> {
  constructor(private readonly hallRepository: HallRepository) {}

  async execute(hall: UpdateHallCommand) {
    return this.hallRepository.updateHall(hall);
  }
}
