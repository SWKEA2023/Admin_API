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
  customerId: number;

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
    type: String,
    description: 'This is a required property',
  })
  @Column()
  phoneNumber: string;

  @ApiPropertyOptional({
    type: Date,
    description: 'This is an optional property',
    readOnly: true,
  })
  @Column({ default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;
}
