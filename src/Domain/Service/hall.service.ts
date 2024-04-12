import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { CreateHallCommand } from '../../Application/Hall/Commands/Impl/create-hall.command';
import { Hall } from '../Entities/Hall';
import { GetHallQuery } from '../../Application/Hall/Queries/Impl/get-hall.query';
import { GetHallsQuery } from '../../Application/Hall/Queries/Impl/get-halls.query';
import { Injectable } from '@nestjs/common';
import { UpdateHallCommand } from 'src/Application/Hall/Commands/Impl/update-hall.command';
import { DeleteHallCommand } from 'src/Application/Hall/Commands/Impl/delete-hall.command';

@Injectable()
export class HallService {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  async createHall(hall: Hall) {
    return this.commandBus.execute(
      new CreateHallCommand(hall.name, hall.capacity),
    );
  }

  async getHall(hallId: number) {
    return this.queryBus.execute(new GetHallQuery(hallId));
  }

  async getHalls() {
    return this.queryBus.execute(new GetHallsQuery());
  }

  async updateHall(hall: Hall) {
    return this.commandBus.execute(
      new UpdateHallCommand(hall.hallId, hall.name, hall.capacity),
    );
  }

  async deleteHall(hallId: number) {
    return this.commandBus.execute(new DeleteHallCommand(hallId));
  }
}
