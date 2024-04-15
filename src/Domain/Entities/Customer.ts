import { AggregateRoot } from '@nestjs/cqrs';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Customer extends AggregateRoot {
  @ApiPropertyOptional({
    type: Number,
    description: 'This is an optional property',
    readOnly: true,
  })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({
    type: String,
    description: 'This is a required property',
  })
  @Column()
  firstName: string;

  @ApiProperty({
    type: String,
    description: 'This is a required property',
  })
  @Column()
  lastName: string;

  @ApiProperty({
    type: String,
    description: 'This is a required property',
  })
  @Column()
  email: string;

  @ApiProperty({
    type: Number,
    description: 'This is a required property',
  })
  @Column()
  phoneNumber: string;
  name: string;
  customerId: number;
}
