import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { CreateScreeningCommand } from '../../Application/Screening/Commands/Impl/create-screening.command';
import { Screening } from '../Entities/Screening';
import { GetScreeningQuery } from '../../Application/Screening/Queries/Impl/get-screening.query';
import { GetScreeningsQuery } from '../../Application/Screening/Queries/Impl/get-screenings.query';
import { Injectable } from '@nestjs/common';
import { UpdateScreeningCommand } from 'src/Application/Screening/Commands/Impl/update-screening.command';
import { DeleteScreeningCommand } from 'src/Application/Screening/Commands/Impl/delete-screening.command';
import { ScreeningDTO } from '../Entities/ScreeningDTO';

@Injectable()
export class ScreeningService {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  async createScreening(screening: ScreeningDTO) {
    return this.commandBus.execute(new CreateScreeningCommand(screening));
  }

  async getScreening(screeningId: number) {
    return this.queryBus.execute(new GetScreeningQuery(screeningId));
  }

  async getScreenings() {
    return this.queryBus.execute(new GetScreeningsQuery());
  }

  async updateScreening(screening: Screening) {
    return this.commandBus.execute(new UpdateScreeningCommand(screening));
  }

  async deleteScreening(screeningId: number) {
    return this.commandBus.execute(new DeleteScreeningCommand(screeningId));
  }
}
