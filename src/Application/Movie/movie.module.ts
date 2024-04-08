import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MovieService } from '../../Domain/Service/movie.service';
import { MovieController } from '../../Interface/Controllers/movie.controller';
import { Movie } from '../../Domain/Entities/Movie';

@Module({
  imports: [TypeOrmModule.forFeature([Movie])],
  providers: [MovieService],
  controllers: [MovieController],
})
export class MovieModule {}
