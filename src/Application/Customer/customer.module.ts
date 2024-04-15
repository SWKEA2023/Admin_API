import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomerService } from '../../Domain/Service/customer.service';
import { CustomerController } from '../../Interface/Controllers/customer.controller';
import { Customer } from '../../Domain/Entities/Customer';
import { CommandHandlers } from './Commands/Handlers';
import { QueryHandlers } from './Queries/Handlers';
import { CqrsModule } from '@nestjs/cqrs';
import { ClientsModule, Transport } from '@nestjs/microservices';
import 'dotenv/config';
import { CustomerRepository } from 'src/Infrastructure/Repository/customer.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([Customer]),
    CqrsModule,
    ClientsModule.register([
      {
        name: 'Customer_QUEUE',
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
    CustomerService,
    CustomerRepository,
    ...CommandHandlers,
    ...QueryHandlers,
  ],
  controllers: [CustomerController],
})
export class CustomerModule {}
