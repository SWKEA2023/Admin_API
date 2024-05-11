import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommandHandlers } from '../Order/Commands/Handlers';
import { QueryHandlers } from '../Order/Queries/Handlers';
import { CqrsModule } from '@nestjs/cqrs';
// import { ClientsModule, Transport } from '@nestjs/microservices';
import { OrderService } from 'src/Domain/Service/order.service';
import { OrderController } from 'src/Interface/Controllers/order.controller';
import { Order } from 'src/Domain/Entities/Order';
import { OrderRepository } from 'src/Infrastructure/Repository/order.repository';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    CqrsModule,
    ConfigModule.forRoot(),
    TypeOrmModule.forFeature([Order]),
    CqrsModule,
    // ClientsModule.register([
    //   {
    //     name: 'ORDER_QUEUE',
    //     transport: Transport.RMQ,
    //     options: {
    //       urls: ['amqp://admin:password123@0.0.0.0:5672/my_vhost'],
    //       queue: 'Elastic_QUEUE',
    //       queueOptions: { durable: true },
    //     },
    //   },
    // ]),
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
