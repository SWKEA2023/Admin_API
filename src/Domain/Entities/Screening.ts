import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Screening {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  date: Date;

  @Column()
  price: number;
}
