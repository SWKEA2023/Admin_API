import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Ticket {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  price: number;

  @Column()
  seatId: number;

  @Column()
  screeningId: number;

  @Column()
  customerId: number;
}
