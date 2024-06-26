import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TicketService } from '../../Domain/Service/ticket.service';
import { TicketController } from '../../Interface/Controllers/ticket.controller';
import { Ticket } from '../../Domain/Entities/Ticket';
import { CommandHandlers } from '../Ticket/Commands/Handlers';
import { QueryHandlers } from '../Ticket/Queries/Handlers';
import { CqrsModule } from '@nestjs/cqrs';
import { TicketRepository } from 'src/Infrastructure/Repository/ticket.repository';
import { ClientsModule, Transport } from '@nestjs/microservices';
import 'dotenv/config';
import { CustomerModule } from '../Customer/customer.module';
import { OrderModule } from '../Order/order.module';
import { SeatModule } from '../Seat/seat.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Ticket]),
    CqrsModule,
    CustomerModule,
    OrderModule,
    SeatModule,
    ClientsModule.register([
      {
        name: 'TICKET_QUEUE',
        transport: Transport.RMQ,
        options: {
          urls: [process.env.RMQ_URL],
          queue: process.env.RMQ_QUEUE_PUBLISH_EMAILAPI,
          queueOptions: { durable: true },
        },
      },
    ]),
  ],
  providers: [
    TicketService,
    TicketRepository,
    ...CommandHandlers,
    ...QueryHandlers,
  ],
  controllers: [TicketController],
})
export class TicketModule {}
