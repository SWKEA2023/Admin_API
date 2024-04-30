import { ApiPropertyOptional, ApiProperty } from '@nestjs/swagger';
import { Entity, Column, PrimaryGeneratedColumn, ManyToMany } from 'typeorm';
import { Product } from './Product';

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
  @Column({ default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @ApiProperty({
    type: Number,
    description: 'This is a required property',
  })
  @Column()
  fkCustomerId: number;

  @ManyToMany(
    () => Product,
    (product) => product.orders,
    {onDelete: 'NO ACTION', onUpdate: 'NO ACTION',},
  )
    products: Product[];
}
