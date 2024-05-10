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
  @PrimaryGeneratedColumn({ name: 'customer_id' })
  customerId: number;

  @ApiProperty({
    type: String,
    description: 'This is a required property',
  })
  @Column({ name: 'first_name' })
  firstName: string;

  @ApiProperty({
    type: String,
    description: 'This is a required property',
  })
  @Column({ name: 'last_name' })
  lastName: string;

  @ApiProperty({
    type: String,
    description: 'This is a required property',
  })
  @Column({ name: 'email' })
  email: string;

  @ApiProperty({
    type: String,
    description: 'This is a required property',
  })
  @Column({ name: 'phone_number' })
  phoneNumber: string;

  @ApiPropertyOptional({
    type: Date,
    description: 'This is an optional property',
    readOnly: true,
  })
  @Column({ default: () => 'CURRENT_TIMESTAMP', name: 'created_at' })
  createdAt: Date;
}
