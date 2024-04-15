import { CommandHandler, IQueryHandler } from '@nestjs/cqrs';
import { DeleteScreeningCommand } from '../Impl/delete-screening.command';
import { ScreeningRepository } from '../../../../Infrastructure/Repository/screening.repository';

@CommandHandler(DeleteScreeningCommand)
export class DeleteScreeningHandler
  implements IQueryHandler<DeleteScreeningCommand>
{
  constructor(private readonly screeningRepository: ScreeningRepository) {}

  async execute(query: DeleteScreeningCommand) {
    return this.screeningRepository.deleteScreening(query.seatId);
  }
}
