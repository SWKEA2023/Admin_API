import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetSeatQuery } from '../Impl/get-seat.query';
import { SeatRepository } from '../../../../Infrastructure/Repository/seat.repository';

@QueryHandler(GetSeatQuery)
export class GetSeatHandler implements IQueryHandler<GetSeatQuery> {
  constructor(private readonly seatRepository: SeatRepository) {}

  async execute(query: GetSeatQuery) {
    return this.seatRepository.getSeat(query.seatId);
  }
}
