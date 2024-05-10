import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommandHandlers } from '../Order/Commands/Handlers';
import { QueryHandlers } from '../Order/Queries/Handlers';
import { CqrsModule } from '@nestjs/cqrs';
import { ClientsModule, Transport } from '@nestjs/microservices';
import 'dotenv/config';
import { OrderService } from 'src/Domain/Service/order.service';
import { OrderController } from 'src/Interface/Controllers/order.controller';
import { Order } from 'src/Domain/Entities/Order';
import { OrderRepository } from 'src/Infrastructure/Repository/order.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([Order]),
    CqrsModule,
    ClientsModule.register([
      {
        name: 'ORDER_QUEUE',
        transport: Transport.RMQ,
        options: {
          urls: [process.env.RMQ_URL],
          queue: 'test_admin_queue',
          queueOptions: { durable: true },
        },
      },
    ]),
  ],
  providers: [
    OrderRepository,
    OrderService,
    ...CommandHandlers,
    ...QueryHandlers,
  ],
  controllers: [OrderController],
})
export class OrderModule {}
