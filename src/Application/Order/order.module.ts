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
import { CustomerModule } from '../Customer/customer.module';

@Module({
  imports: [
    CqrsModule,
    ConfigModule.forRoot(),
    TypeOrmModule.forFeature([Order]),
    CustomerModule,
  ],
  providers: [
    OrderRepository,
    OrderService,
    ...CommandHandlers,
    ...QueryHandlers,
  ],
  controllers: [OrderController],
  exports: [OrderRepository],
})
export class OrderModule {}
