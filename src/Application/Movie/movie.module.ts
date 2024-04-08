import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MovieService } from '../../Domain/Service/movie.service';
import { MovieController } from '../../Interface/Controllers/movie.controller';
import { Movie } from '../../Domain/Entities/Movie';
import { CommandHandlers } from '../Movie/Commands/Handlers';
import { QueryHandlers } from '../Movie/Queries/Handlers';
import { CqrsModule } from '@nestjs/cqrs';
import { MovieRepository } from 'src/Infrastructure/Repository/movie.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Movie]), CqrsModule],
  providers: [
    MovieService,
    MovieRepository,
    ...CommandHandlers,
    ...QueryHandlers,
  ],
  controllers: [MovieController],
})
export class MovieModule {}
