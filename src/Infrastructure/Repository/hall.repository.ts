import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Hall } from '../../Domain/Entities/Hall';
import { CreateHallCommand } from 'src/Application/Hall/Commands/Impl/create-hall.command';
import { UpdateHallCommand } from 'src/Application/Hall/Commands/Impl/update-hall.command';

@Injectable()
export class HallRepository {
  constructor(
    @InjectRepository(Hall)
    private readonly hallRepository: Repository<Hall>,
  ) {}

  async createHall(hall: CreateHallCommand) {
    return this.hallRepository.save(hall);
  }

  async getHall(hallId: number) {
    return this.hallRepository.findOneBy({ hallId: hallId });
  }

  async getHalls() {
    return this.hallRepository.find();
  }

  async updateHall(hall: UpdateHallCommand) {
    return this.hallRepository.save(hall);
  }

  async deleteHall(hallId: number) {
    return this.hallRepository.delete(hallId);
  }
}
