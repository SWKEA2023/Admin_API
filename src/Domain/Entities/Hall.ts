import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Hall {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  capacity: number;
}
