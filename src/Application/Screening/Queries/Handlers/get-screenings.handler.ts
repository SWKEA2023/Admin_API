import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetScreeningsQuery } from '../Impl/get-screenings.query';
import { ScreeningRepository } from 'src/Infrastructure/Repository/screening.repository';

@QueryHandler(GetScreeningsQuery)
export class GetScreeningsHandler implements IQueryHandler<GetScreeningsQuery> {
  constructor(private readonly screeningRepsitory: ScreeningRepository) {}

  async execute() {
    return this.screeningRepsitory.getScreenings();
  }
}
