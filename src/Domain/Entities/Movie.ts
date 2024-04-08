import { AggregateRoot } from '@nestjs/cqrs';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Movie extends AggregateRoot {
  @PrimaryGeneratedColumn()
  movieId: number;

  @Column()
  title: string;

  @Column()
  duration: number;

  create() {
    //this.apply( new MovieCreatedEvent(this));
  }
}
