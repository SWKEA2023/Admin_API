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
  @PrimaryGeneratedColumn()
  hallId: number;

  @ApiProperty({
    type: String,
    description: 'This is a required property',
  })
  @Column()
  hallName: string;

  @ApiProperty({
    type: Number,
    description: 'This is a required property',
  })
  @Column()
  seatRows: number;

  @ApiProperty({
    type: Number,
    description: 'This is a required property',
  })
  @Column()
  seatNumber: number;

  @Column({ default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;
}
