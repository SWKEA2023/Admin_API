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
  @ManyToOne(() => Hall)
  @JoinColumn({ name: 'hallId' })
  fkHallId: number;
}
