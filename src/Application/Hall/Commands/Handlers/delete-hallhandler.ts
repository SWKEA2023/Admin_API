import { CommandHandler, IQueryHandler } from '@nestjs/cqrs';
import { DeleteHallCommand } from '../Impl/delete-hall.command';
import { HallRepository } from 'src/Infrastructure/Repository/hall.repository';

@CommandHandler(DeleteHallCommand)
export class DeleteHallHandler implements IQueryHandler<DeleteHallCommand> {
  constructor(private readonly hallRepository: HallRepository) {}

  async execute(query: DeleteHallCommand) {
    return this.hallRepository.deleteHall(query.hallId);
  }
}
