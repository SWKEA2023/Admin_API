import { ApiPropertyOptional, ApiProperty } from '@nestjs/swagger';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { Order } from './Order';

@Entity()
export class Product {
  @ApiPropertyOptional({
    type: Number,
    description: 'This is an optional property',
    readOnly: true,
  })
  @PrimaryGeneratedColumn()
  productId: number;

  @ApiProperty({
    type: String,
    description: 'This is a required property',
  })
  @Column()
  productName: string;

  @ApiProperty({
    type: Number,
    description: 'This is a required property',
  })
  @Column()
  price: number;

  @ApiProperty({
    type: String,
    description: 'This is a required property',
  })
  @Column()
  category: string;

  @ApiProperty({
    type: Date,
    description: 'This is a required property',
  })
  @Column()
  createdAt: Date;

  @ApiProperty({
    type: Order,
    description: 'This is a required property',
  })
  @Column()
  orders: Order[];
}
