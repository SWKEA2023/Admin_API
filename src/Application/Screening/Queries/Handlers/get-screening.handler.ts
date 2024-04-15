import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetScreeningQuery } from '../Impl/get-screening.query';
import { ScreeningRepository } from '../../../../Infrastructure/Repository/screening.repository';

@QueryHandler(GetScreeningQuery)
export class GetScreeningHandler implements IQueryHandler<GetScreeningQuery> {
  constructor(private readonly screeningRepository: ScreeningRepository) {}

  async execute(query: GetScreeningQuery) {
    return this.screeningRepository.getScreening(query.screeningId);
  }
}
