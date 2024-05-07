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
  @ManyToOne(() => Hall)
  @JoinColumn({ name: 'hall_id' })
  hall: Hall;

  @ApiProperty({
    type: Movie,
    description: 'This is a required property',
  })
  @ManyToOne(() => Movie)
  @JoinColumn({ name: 'movie_id' })
  movie: Movie;
}
