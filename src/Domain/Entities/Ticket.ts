import { ApiPropertyOptional, ApiProperty } from '@nestjs/swagger';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Order } from './Order';
import { Seat } from './Seat';
import { Screening } from './Screening';

@Entity()
export class Ticket {
  @ApiPropertyOptional({
    type: Number,
    description: 'This is an optional property',
    readOnly: true,
  })
  @PrimaryGeneratedColumn({ name: 'ticket_id' })
  ticketId: number;

  @ApiProperty({
    type: Date,
    description: 'This is a required property',
  })
  @Column({ default: () => 'CURRENT_TIMESTAMP', name: 'created_at' })
  createdAt: Date;

  @ApiProperty({
    type: Screening,
    description: 'This is a required property for a screening',
  })
  @ManyToOne(() => Screening, (screening) => screening, {
    onDelete: 'NO ACTION',
  })
  @JoinColumn({ name: 'fk_screening_id', referencedColumnName: 'screeningId' })
  screening: Screening;

  @ApiProperty({
    type: Order,
    description: 'This is a required property for an order',
  })
  @ManyToOne(() => Order, (order) => order, { onDelete: 'NO ACTION' })
  @JoinColumn({
    name: 'fk_order_id',
    referencedColumnName: 'orderId',
  })
  order: Order;

  @ApiProperty({
    type: Seat,
    description: 'This is a required property for a seat',
  })
  @ManyToOne(() => Seat, (seat) => seat, { onDelete: 'NO ACTION' })
  @JoinColumn({ name: 'fk_seat_id', referencedColumnName: 'seatId' })
  seat: Seat;
}
