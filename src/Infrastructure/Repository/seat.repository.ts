import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateSeatCommand } from 'src/Application/Seat/Commands/Impl/create-seat.command';
import { UpdateSeatCommand } from 'src/Application/Seat/Commands/Impl/update-seat.command';
import { Seat } from 'src/Domain/Entities/Seat';
import { Repository } from 'typeorm';

@Injectable()
export class SeatRepository {
  constructor(
    @InjectRepository(Seat)
    private readonly seatRepository: Repository<Seat>,
  ) {}

  async createSeat(seat: CreateSeatCommand) {
    return this.seatRepository.save(seat);
  }

  async getSeat(seatId: number) {
    return this.seatRepository.findOneBy({ seatId: seatId });
  }

  async getSeats() {
    return this.seatRepository.find();
  }

  async updateSeat(seat: UpdateSeatCommand) {
    return this.seatRepository.save(seat);
  }

  async deleteSeat(seatId: number) {
    return this.seatRepository.delete(seatId);
  }
}
