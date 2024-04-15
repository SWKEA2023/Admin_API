import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SeatService } from '../../Domain/Service/seat.service';
import { SeatController } from '../../Interface/Controllers/seat.controller';
import { Seat } from '../../Domain/Entities/Seat';
import { CommandHandlers } from '../Seat/Commands/Handlers';
import { QueryHandlers } from '../Seat/Queries/Handlers';
import { CqrsModule } from '@nestjs/cqrs';
import { SeatRepository } from 'src/Infrastructure/Repository/seat.repository';
import { ClientsModule, Transport } from '@nestjs/microservices';
import 'dotenv/config';

@Module({
  imports: [
    TypeOrmModule.forFeature([Seat]),
    CqrsModule,
    ClientsModule.register([
      {
        name: 'SEAT_QUEUE',
        transport: Transport.RMQ,
        options: {
          urls: [process.env.RMQ_URL],
          queue: process.env.RMQ_QUEUE,
          queueOptions: { durable: true },
        },
      },
    ]),
  ],
  providers: [
    SeatService,
    SeatRepository,
    ...CommandHandlers,
    ...QueryHandlers,
  ],
  controllers: [SeatController],
})
export class SeatModule {}
