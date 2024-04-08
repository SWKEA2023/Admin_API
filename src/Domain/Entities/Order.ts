import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  customer_id: number;

  @Column()
  movie_id: number;

  @Column()
  hall_id: number;

  @Column()
  seat_id: number;

  @Column()
  date: Date;
}
