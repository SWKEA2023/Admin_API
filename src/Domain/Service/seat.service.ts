import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { CreateSeatCommand } from '../../Application/Seat/Commands/Impl/create-seat.command';
import { Seat } from '../Entities/Seat';
import { GetSeatQuery } from '../../Application/Seat/Queries/Impl/get-seat.query';
import { GetSeatsQuery } from '../../Application/Seat/Queries/Impl/get-seats.query';
import { Injectable } from '@nestjs/common';
import { UpdateSeatCommand } from 'src/Application/Seat/Commands/Impl/update-seat.command';
import { DeleteSeatCommand } from 'src/Application/Seat/Commands/Impl/delete-seat.command';

@Injectable()
export class SeatService {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  async createSeat(seat: Seat) {
    return this.commandBus.execute(
      new CreateSeatCommand(
        seat.seatNumber,
        seat.seatRow,
        seat.price,
        seat.fkHallId,
      ),
    );
  }

  async getSeat(seatId: number) {
    return this.queryBus.execute(new GetSeatQuery(seatId));
  }

  async getSeats() {
    return this.queryBus.execute(new GetSeatsQuery());
  }

  async updateSeat(seat: Seat) {
    return this.commandBus.execute(
      new UpdateSeatCommand(
        seat.seatId,
        seat.seatNumber,
        seat.seatRow,
        seat.price,
        seat.fkHallId,
      ),
    );
  }

  async deleteSeat(seatId: number) {
    return this.commandBus.execute(new DeleteSeatCommand(seatId));
  }
}
