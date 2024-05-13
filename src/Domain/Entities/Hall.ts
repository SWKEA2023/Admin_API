import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { AggregateRoot } from '@nestjs/cqrs';

@Entity()
export class Hall extends AggregateRoot {
  @ApiPropertyOptional({
    type: Number,
    description: 'This is an optional property',
    readOnly: true,
  })
  @PrimaryGeneratedColumn({ name: 'hall_id' })
  hallId: number;

  @ApiProperty({
    type: String,
    description: 'This is a required property',
  })
  @Column({ name: 'hall_name' })
  hallName: string;

  @ApiProperty({
    type: Number,
    description: 'This is a required property',
  })
  @Column({ name: 'seat_rows' })
  seatRows: number;

  @ApiProperty({
    type: Number,
    description: 'This is a required property',
  })
  @Column({ name: 'seat_numbers' })
  seatNumber: number;

  @ApiPropertyOptional({
    type: Date,
    description: 'This is an optional property',
    readOnly: true,
  })
  @Column({ default: () => 'CURRENT_TIMESTAMP', name: 'created_at' })
  createdAt: Date;
}
