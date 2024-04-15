import { Module } from '@nestjs/common';
import { AppController } from './Interface/app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MovieModule } from './Application/Movie/movie.module';
import { HallModule } from './Application/Hall/hall.module';
import { Movie } from './Domain/Entities/Movie';
import { Hall } from './Domain/Entities/Hall';
import { CustomerModule } from './Application/Customer/customer.module';
import { Customer } from './Domain/Entities/Customer';
import { SeatModule } from './Application/Seat/seat.module';
import { Seat } from './Domain/Entities/Seat';
import { ScreeningModule } from './Application/Screening/screening.module';
import { Screening } from './Domain/Entities/Screening';
import { TicketModule } from './Application/Ticket/ticket.module';
import { Ticket } from './Domain/Entities/Ticket';

@Module({
  imports: [
    MovieModule,
    SeatModule,
    HallModule,
    CustomerModule,
    ScreeningModule,
    TicketModule,
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_DBPORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities: [Movie, Hall, Customer, Seat, Screening, Ticket],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
