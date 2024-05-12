import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Seat } from 'src/Domain/Entities/Seat';
import { Repository } from 'typeorm';

@Injectable()
export class SeatRepository {
  constructor(
    @InjectRepository(Seat)
    private readonly seatRepository: Repository<Seat>,
  ) {}

  async createSeat(seat: Seat) {
    return this.seatRepository.save(seat);
  }

  // async createSeats(seats: Seat[]) {
  //   return this.seatRepository.save(seats);
  // }

  async getSeat(seatId: number) {
    return this.seatRepository.findOneBy({ seatId: seatId });
  }

  async getSeats() {
    return this.seatRepository.find();
  }

  async updateSeat(seat: Seat) {
    return this.seatRepository.save(seat);
  }

  async deleteSeat(seatId: number) {
    return this.seatRepository.delete(seatId);
  }
}
