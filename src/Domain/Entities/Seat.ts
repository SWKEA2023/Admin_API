import { ApiPropertyOptional, ApiProperty } from '@nestjs/swagger';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  JoinColumn,
  ManyToOne,
} from 'typeorm';
import { Hall } from './Hall';

@Entity()
export class Seat {
  @ApiPropertyOptional({
    type: Number,
    description: 'This is an optional property',
    readOnly: true,
  })
  @PrimaryGeneratedColumn({ name: 'seat_id' })
  seatId: number;

  @ApiProperty({
    type: Number,
    description: 'This is a required property',
  })
  @Column({ name: 'seat_row' })
  seatRow: number;

  @ApiProperty({
    type: Number,
    description: 'This is a required property',
  })
  @Column({ name: 'seat_number' })
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
  @Column({ default: () => 'CURRENT_TIMESTAMP', name: 'created_at' })
  createdAt: Date;

  @ApiProperty({
    type: Number,
    description: 'This is a required property',
  })
  @ManyToOne(() => Hall, (hall) => hall, { onDelete: 'NO ACTION' })
  @JoinColumn({ name: 'fk_hall_id', referencedColumnName: 'hallId' })
  hall: Hall;
}
