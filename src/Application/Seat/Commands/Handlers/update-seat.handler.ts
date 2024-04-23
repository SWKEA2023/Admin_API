import { ICommandHandler, CommandHandler } from '@nestjs/cqrs';
import { SeatRepository } from '../../../../Infrastructure/Repository/seat.repository';
import { UpdateSeatCommand } from '../Impl/update-seat.command';

@CommandHandler(UpdateSeatCommand)
export class UpdateSeatHandler implements ICommandHandler<UpdateSeatCommand> {
  constructor(private readonly seatRepository: SeatRepository) {}

  async execute(seat: UpdateSeatCommand) {
    return this.seatRepository.updateSeat(seat);
  }
}
