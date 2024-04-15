import { CommandHandler, IQueryHandler } from '@nestjs/cqrs';
import { DeleteSeatCommand } from '../Impl/delete-seat.command';
import { SeatRepository } from '../../../../Infrastructure/Repository/seat.repository';

@CommandHandler(DeleteSeatCommand)
export class DeleteSeatHandler implements IQueryHandler<DeleteSeatCommand> {
  constructor(private readonly seatRepository: SeatRepository) {}

  async execute(query: DeleteSeatCommand) {
    return this.seatRepository.deleteSeat(query.seatId);
  }
}
