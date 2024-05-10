import { ApiPropertyOptional, ApiProperty } from '@nestjs/swagger';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinColumn,
  JoinTable,
} from 'typeorm';
import { Order } from './Order';

@Entity()
export class Product {
  @ApiPropertyOptional({
    type: Number,
    description: 'This is an optional property',
    readOnly: true,
  })
  @PrimaryGeneratedColumn({ name: 'product_id' })
  productId: number;

  @ApiProperty({
    type: String,
    description: 'This is a required property',
  })
  @Column({ name: 'product_name' })
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
  @Column({ default: () => 'CURRENT_TIMESTAMP', name: 'created_at' })
  createdAt: Date;

  @ApiPropertyOptional({
    type: Order,
    description: 'This is a optional property',
  })
  @ManyToMany(() => Order, (order) => order.products, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  @JoinColumn()
  @JoinTable({
    name: 'product_order',
    joinColumn: {
      name: 'fk_product_id',
      referencedColumnName: 'productId',
    },
    inverseJoinColumn: {
      name: 'fk_order_id',
      referencedColumnName: 'orderId',
    },
  })
  orders: Order[];
}
