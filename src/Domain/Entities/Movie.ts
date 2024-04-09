import { AggregateRoot } from '@nestjs/cqrs';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Movie extends AggregateRoot {
  @ApiPropertyOptional({
    type: Number,
    description: 'This is an optional property',
    readOnly: true,
  })
  @PrimaryGeneratedColumn()
  movieId: number;

  @ApiProperty({
    type: String,
    description: 'This is a required property',
  })
  @Column()
  title: string;

  @ApiProperty({
    type: Number,
    description: 'This is a required property',
  })
  @Column()
  duration: number;

  create() {
    //this.apply( new MovieCreatedEvent(this));
  }
}
