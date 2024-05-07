import { ApiPropertyOptional, ApiProperty } from '@nestjs/swagger';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Movie } from './Movie';
import { Hall } from './Hall';

@Entity()
export class Screening {
  @ApiPropertyOptional({
    type: Number,
    description: 'This is an optional property',
    readOnly: false,
  })
  @PrimaryGeneratedColumn({ name: 'screening_id' })
  screeningId: number;

  @ApiProperty({
    type: Date,
    description: 'This is a required property',
  })
  @Column({ name: 'date' })
  date: Date;

  @ApiProperty({
    type: Date,
    description: 'This is a required property',
  })
  @Column({ name: 'start_time' })
  startTime: Date;

  @ApiProperty({
    type: Date,
    description: 'This is a required property',
  })
  @Column({ name: 'end_time' })
  endTime: Date;

  @ApiPropertyOptional({
    type: Date,
    description: 'This is an optional property',
    readOnly: true,
  })
  @Column({ default: () => 'CURRENT_TIMESTAMP', name: 'created_at' })
  createdAt: Date;

  @ApiProperty({
    type: Hall,
    description: 'This is a required property',
  })
  @ManyToOne(() => Hall, (hall) => hall.hallId, { onDelete: 'CASCADE' })
  @JoinColumn({
    name: 'fk_hall_id',
    referencedColumnName: 'hallId',
  })
  hall: Hall;

  @ApiProperty({
    type: Movie,
    description: 'This is a required property',
  })
  @ManyToOne(() => Movie, (movie) => movie, { onDelete: 'CASCADE' })
  @JoinColumn({
    name: 'fk_movie_id',
    referencedColumnName: 'movieId',
  })
  movie: Movie;
}
