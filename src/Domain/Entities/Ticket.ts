import { ApiPropertyOptional, ApiProperty } from '@nestjs/swagger';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Ticket {
  @ApiPropertyOptional({
    type: Number,
    description: 'This is an optional property',
    readOnly: true,
  })
  @PrimaryGeneratedColumn()
  ticketId: number;

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
  fkScreeningId: number;

  @ApiProperty({
    type: Number,
    description: 'This is a required property',
  })
  @Column()
  fkOrderId: number;

  @ApiProperty({
    type: Number,
    description: 'This is a required property',
  })
  @Column()
  fkSeatId: number;
}
