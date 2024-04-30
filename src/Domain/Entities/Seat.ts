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
    type: Number,
    description: 'This is a required property',
  })
  @Column()
  seatRow: number;

  @ApiProperty({
    type: Number,
    description: 'This is a required property',
  })
  @Column()
  seatNumber: number;

  @ApiProperty({
    type: Number,
    description: 'This is a required property',
  })
  @Column()
  price: number;

  @ApiPropertyOptional({
    type: Date,
    description: 'This is an optional property',
    readOnly: true,
  })
  @Column({ default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @ApiProperty({
    type: Number,
    description: 'This is a required property',
  })
  @Column()
  fkHallId: number;
}
