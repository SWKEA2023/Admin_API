import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ScreeningService } from '../../Domain/Service/screening.service';
import { ScreeningController } from '../../Interface/Controllers/screening.controller';
import { Screening } from '../../Domain/Entities/Screening';
import { CommandHandlers } from '../Screening/Commands/Handlers';
import { QueryHandlers } from '../Screening/Queries/Handlers';
import { CqrsModule } from '@nestjs/cqrs';
import { ScreeningRepository } from 'src/Infrastructure/Repository/screening.repository';
import { ClientsModule, Transport } from '@nestjs/microservices';
import 'dotenv/config';
import { HallModule } from '../Hall/hall.module';
import { MovieModule } from '../Movie/movie.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Screening]),
    CqrsModule,
    ClientsModule.register([
      {
        name: 'SCREENING_QUEUE',
        transport: Transport.RMQ,
        options: {
          urls: [process.env.RMQ_URL],
          queue: process.env.RMQ_QUEUE,
          queueOptions: { durable: true },
        },
      },
    ]),
    HallModule,
    MovieModule,
  ],
  providers: [
    ScreeningService,
    ScreeningRepository,
    ...CommandHandlers,
    ...QueryHandlers,
  ],
  controllers: [ScreeningController],
})
export class ScreeningModule {}
