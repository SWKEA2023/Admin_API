import { ApiPropertyOptional, ApiProperty } from '@nestjs/swagger';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Product } from './Product';
import { Customer } from './Customer';

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
    type: Customer,
    description: 'This is a required property',
  })
  @ManyToOne(() => Customer, (customer) => customer, {
    onDelete: 'NO ACTION',
  })
  @JoinColumn({ name: 'fk_customer_id', referencedColumnName: 'customerId' })
  customer: Customer;

  @ManyToMany(() => Product, (product) => product.orders, {
    onDelete: 'NO ACTION',
  })
  products: Product[];
}
