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
    //return this.screeningRepository.find();
    return this.screeningRepository.query(`SELECT 
    screening.screeningId, 
    screening.date, 
    screening.startTime, 
    screening.endTime, 
    screening.createdAt, 
    JSON_OBJECT(
        'hallId', hall.hallId, 
        'hallName', hall.hallName, 
        'seatRows', hall.seatRows, 
        'seatNumber', hall.seatNumber
    ) AS hall, 
    JSON_OBJECT(
        'movieId', movie.movieId, 
        'title', movie.title, 
        'duration', movie.duration, 
        'director', movie.director, 
        'year', movie.year, 
        'language', movie.language, 
        'pegi', movie.pegi, 
        'imageURL', movie.imageURL, 
        'trailerURL', movie.trailerURL
    ) AS movie
FROM screening
JOIN hall ON screening.fkHallId = hall.hallId
JOIN movie ON screening.fkMovieId = movie.movieId`);
  }

  async updateScreening(screening: UpdateScreeningCommand) {
    return this.screeningRepository.save(screening);
  }

  async deleteScreening(screeningId: number) {
    return this.screeningRepository.delete(screeningId);
  }
}
