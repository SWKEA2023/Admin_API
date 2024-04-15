import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetSeatsQuery } from '../Impl/get-seats.query';
import { SeatRepository } from 'src/Infrastructure/Repository/seat.repository';

@QueryHandler(GetSeatsQuery)
export class GetSeatsHandler implements IQueryHandler<GetSeatsQuery> {
  constructor(private readonly seatRepsitory: SeatRepository) {}

  async execute() {
    return this.seatRepsitory.getSeats();
  }
}
