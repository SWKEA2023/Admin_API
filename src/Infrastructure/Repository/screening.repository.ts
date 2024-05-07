import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Screening } from '../../Domain/Entities/Screening';

@Injectable()
export class ScreeningRepository {
  constructor(
    @InjectRepository(Screening)
    private readonly screeningRepository: Repository<Screening>,
  ) {}

  async createScreening(screening: Screening) {
    return this.screeningRepository.save(screening);
  }

  async getScreening(id: number) {
    return this.screeningRepository.findOne({
      where: { screeningId: id },
      relations: ['hall', 'movie'],
    });
  }

  async getScreenings() {
    return await this.screeningRepository.find({
      relations: ['hall', 'movie'],
    });
  }

  async updateScreening(screening: Screening) {
    return this.screeningRepository.save(screening);
  }

  async deleteScreening(id: number) {
    return this.screeningRepository.delete({ screeningId: id });
  }
}
