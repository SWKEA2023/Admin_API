import { ApiPropertyOptional, ApiProperty } from '@nestjs/swagger';
import { Entity, Column, PrimaryGeneratedColumn, ManyToMany } from 'typeorm';
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

  @ApiPropertyOptional({
    type: Date,
    description: 'This is a optional property',
  })
  @Column({ default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @ApiPropertyOptional({
    type: Order,
    description: 'This is a optional property',
  })
  @ManyToMany(
    () => Order,
    order => order.products,
    {onDelete: 'NO ACTION', onUpdate: 'NO ACTION',},
  )
  @Column()
  orders: Order[];
}
