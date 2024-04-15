import { ApiPropertyOptional, ApiProperty } from '@nestjs/swagger';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Order {
  @ApiPropertyOptional({
    type: Number,
    description: 'This is an optional property',
    readOnly: true,
  })
  @PrimaryGeneratedColumn()
  orderId: number;

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
  fkCustomerId: number;
}
