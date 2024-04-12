import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetHallsQuery } from '../Impl/get-halls.query';
import { HallRepository } from 'src/Infrastructure/Repository/hall.repository';

@QueryHandler(GetHallsQuery)
export class GetHallsHandler implements IQueryHandler<GetHallsQuery> {
  constructor(private readonly hallRepository: HallRepository) {}

  async execute() {
    return this.hallRepository.getHalls();
  }
}
