import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Hall {
  @PrimaryGeneratedColumn()
  hallId: number;

  @Column()
  name: string;

  @Column()
  capacity: number;
}
