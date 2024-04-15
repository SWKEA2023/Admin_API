import { ApiPropertyOptional, ApiProperty } from '@nestjs/swagger';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Screening {
  @ApiPropertyOptional({
    type: Number,
    description: 'This is an optional property',
    readOnly: true,
  })
  @PrimaryGeneratedColumn()
  screeningId: number;

  @ApiProperty({
    type: Date,
    description: 'This is a required property',
  })
  @Column()
  date: Date;

  @ApiProperty({
    type: Date,
    description: 'This is a required property',
  })
  @Column()
  startTime: Date;

  @ApiProperty({
    type: Date,
    description: 'This is a required property',
  })
  @Column()
  endTime: Date;

  @ApiProperty({
    type: Date,
    description: 'This is a required property',
  })
  @Column({ default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @ApiProperty({
    type: Number,
    description: 'This is a required property',
  })
  @Column()
  fkHallId: number;

  @ApiProperty({
    type: Number,
    description: 'This is a required property',
  })
  @Column()
  fkMovieId: number;
}
