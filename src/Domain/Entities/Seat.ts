import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Seat {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  row: string;

  @Column()
  number: number;
}
