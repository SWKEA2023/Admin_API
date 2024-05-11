import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MovieService } from '../../Domain/Service/movie.service';
import { MovieController } from '../../Interface/Controllers/movie.controller';
import { Movie } from '../../Domain/Entities/Movie';
import { CommandHandlers } from '../Movie/Commands/Handlers';
import { QueryHandlers } from '../Movie/Queries/Handlers';
import { CqrsModule } from '@nestjs/cqrs';
import { MovieRepository } from 'src/Infrastructure/Repository/movie.repository';
import { ClientsModule, Transport } from '@nestjs/microservices';
import 'dotenv/config';

@Module({
  imports: [
    TypeOrmModule.forFeature([Movie]),
    CqrsModule,
    ClientsModule.register([
      {
        name: 'MOVIE_QUEUE',
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
    MovieService,
    MovieRepository,
    ...CommandHandlers,
    ...QueryHandlers,
  ],
  controllers: [MovieController],
  exports: [MovieRepository],
})
export class MovieModule {}
