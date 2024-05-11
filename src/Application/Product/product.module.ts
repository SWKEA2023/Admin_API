import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductService } from '../../Domain/Service/product.service';
import { ProductController } from '../../Interface/Controllers/product.controller';
import { Product } from '../../Domain/Entities/Product';
import { CommandHandlers } from '../Product/Commands/Handlers';
import { QueryHandlers } from '../Product/Queries/Handlers';
import { CqrsModule } from '@nestjs/cqrs';
import { ProductRepository } from 'src/Infrastructure/Repository/product.repository';
import { ClientsModule, Transport } from '@nestjs/microservices';
import 'dotenv/config';

@Module({
  imports: [
    TypeOrmModule.forFeature([Product]),
    CqrsModule,
    ClientsModule.register([
      {
        name: 'PRODUCT_QUEUE',
        transport: Transport.RMQ,
        options: {
          urls: [process.env.RMQ_URL],
          queue: process.env.RMQ_QUEUE_PUBLISH,
          queueOptions: { durable: true },
        },
      },
    ]),
  ],
  providers: [
    ProductService,
    ProductRepository,
    ...CommandHandlers,
    ...QueryHandlers,
  ],
  controllers: [ProductController],
})
export class ProductModule {}
