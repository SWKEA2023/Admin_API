import { Module } from '@nestjs/common';
import { AppController } from './Interface/app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MovieModule } from './Application/Movie/movie.module';
import { HallModule } from './Application/Hall/hall.module';
import { CustomerModule } from './Application/Customer/customer.module';
import { SeatModule } from './Application/Seat/seat.module';
import { ScreeningModule } from './Application/Screening/screening.module';
import { TicketModule } from './Application/Ticket/ticket.module';
import { ProductModule } from './Application/Product/product.module';
import { OrderModule } from './Application/Order/order.module';
import { dataSource } from './Infrastructure/Database/data-source';

@Module({
  imports: [
    MovieModule,
    ProductModule,
    SeatModule,
    HallModule,
    CustomerModule,
    ScreeningModule,
    TicketModule,
    OrderModule,
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot(dataSource),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
