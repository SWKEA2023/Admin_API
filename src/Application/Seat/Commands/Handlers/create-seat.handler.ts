import { ICommandHandler, CommandHandler } from '@nestjs/cqrs';
import { CreateSeatCommand } from '../Impl/create-seat.command';
import { SeatRepository } from '../../../../Infrastructure/Repository/seat.repository';

@CommandHandler(CreateSeatCommand)
export class CreateSeatHandler implements ICommandHandler<CreateSeatCommand> {
  constructor(private readonly seatRepository: SeatRepository) {}

  async execute(command: CreateSeatCommand) {
    return this.seatRepository.createSeat(command.seat);
  }
}
