import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetHallQuery } from '../Impl/get-hall.query';
import { HallRepository } from '../../../../Infrastructure/Repository/hall.repository';

@QueryHandler(GetHallQuery)
export class GetHallHandler implements IQueryHandler<GetHallQuery> {
  constructor(private readonly hallRepository: HallRepository) {}

  async execute(query: GetHallQuery) {
    return this.hallRepository.getHall(query.hallId);
  }
}
