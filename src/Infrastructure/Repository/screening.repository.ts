import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Screening } from '../../Domain/Entities/Screening';
import { CreateScreeningCommand } from 'src/Application/Screening/Commands/Impl/create-screening.command';
import { UpdateScreeningCommand } from 'src/Application/Screening/Commands/Impl/update-screening.command';

@Injectable()
export class ScreeningRepository {
  constructor(
    @InjectRepository(Screening)
    private readonly screeningRepository: Repository<Screening>,
  ) {}

  async createScreening(screening: CreateScreeningCommand) {
    return this.screeningRepository.save(screening);
  }

  async getScreening(screeningId: number) {
    return this.screeningRepository.findOneBy({ screeningId: screeningId });
  }

  async getScreenings() {
    const response = await this.screeningRepository.find({
      relations: ['hall', 'movie'],
    });

    console.log(response);

    return response;
  }

  async updateScreening(screening: UpdateScreeningCommand) {
    return this.screeningRepository.save(screening);
  }

  async deleteScreening(screeningId: number) {
    return this.screeningRepository.delete(screeningId);
  }
}
