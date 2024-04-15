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
    type: String,
    description: 'This is a required property',
  })
  @Column()
  director: string;

  @ApiProperty({
    type: Number,
    description: 'This is a required property',
  })
  @Column()
  year: number;

  @ApiProperty({
    type: String,
    description: 'This is a required property',
  })
  @Column()
  language: string;

  @ApiProperty({
    type: Number,
    description: 'This is a required property',
  })
  @Column()
  duration: number;

  @ApiProperty({
    type: Number,
    description: 'This is a required property',
  })
  @Column()
  pegi: number;

  @ApiProperty({
    type: String,
    description: 'This is a required property',
  })
  @Column()
  imageURL: string;

  @ApiProperty({
    type: String,
    description: 'This is a required property',
  })
  @Column()
  trailerURL: string;

  @ApiProperty({
    type: Date,
    description: 'This is a required property',
  })
  @Column({ default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;
}
