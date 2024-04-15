import { ApiPropertyOptional, ApiProperty } from '@nestjs/swagger';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Seat {
  @ApiPropertyOptional({
    type: Number,
    description: 'This is an optional property',
    readOnly: true,
  })
  @PrimaryGeneratedColumn()
  seatId: number;

  @ApiProperty({
    type: String,
    description: 'This is a required property',
  })
  @Column()
  seatRow: string;

  @ApiProperty({
    type: Number,
    description: 'This is a required property',
  })
  @Column()
  SeatNumber: number;

  @ApiProperty({
    type: Number,
    description: 'This is a required property',
  })
  @Column()
  price: number;

  @ApiProperty({
    type: Date,
    description: 'This is a required property',
  })
  @Column()
  createdAt: Date;

  @ApiProperty({
    type: Number,
    description: 'This is a required property',
  })
  @Column()
  fkHallId: number;
}
