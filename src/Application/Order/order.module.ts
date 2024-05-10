import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Seat } from '../../Domain/Entities/Seat';
import { CommandHandlers } from '../Seat/Commands/Handlers';
import { QueryHandlers } from '../Seat/Queries/Handlers';
import { CqrsModule } from '@nestjs/cqrs';
import { ClientsModule, Transport } from '@nestjs/microservices';
import 'dotenv/config';
import { OrderService } from 'src/Domain/Service/order.service';
import { OrderRepository } from 'src/Infrastructure/Repository/order.repository';
import { OrderController } from 'src/Interface/Controllers/order.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([Seat]),
    CqrsModule,
    ClientsModule.register([
      {
        name: 'ORDER_QUEUE',
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
    OrderService,
    OrderRepository,
    ...CommandHandlers,
    ...QueryHandlers,
  ],
  controllers: [OrderController],
})
export class OrderModule {}
