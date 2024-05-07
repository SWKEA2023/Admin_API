import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HallService } from '../../Domain/Service/hall.service';
import { HallController } from '../../Interface/Controllers/hall.controller';
import { Hall } from '../../Domain/Entities/Hall';
import { CommandHandlers } from './Commands/Handlers';
import { QueryHandlers } from './Queries/Handlers';
import { CqrsModule } from '@nestjs/cqrs';
import { HallRepository } from 'src/Infrastructure/Repository/hall.repository';
import { ClientsModule, Transport } from '@nestjs/microservices';
import 'dotenv/config';

@Module({
  imports: [
    TypeOrmModule.forFeature([Hall]),
    CqrsModule,
    ClientsModule.register([
      {
        name: 'HALL_QUEUE',
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
    HallService,
    HallRepository,
    ...CommandHandlers,
    ...QueryHandlers,
  ],
  controllers: [HallController],
  exports: [HallRepository],
})
export class HallModule {}
