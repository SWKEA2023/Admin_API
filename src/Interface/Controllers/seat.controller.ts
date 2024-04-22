import { Body, Controller, Get, Inject, Param, Post } from '@nestjs/common';
import { SeatService } from '../../Domain/Service/seat.service';
import { Seat } from '../../Domain/Entities/Seat';
import { ClientProxy } from '@nestjs/microservices';
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

@ApiBearerAuth()
@ApiTags('Seats')
@Controller('seat')
export class SeatController {
  constructor(
    private readonly seatService: SeatService,
    @Inject('SEAT_QUEUE')
    private readonly client: ClientProxy,
  ) {}

  @Post()
  @ApiOperation({ summary: 'Create seat' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiCreatedResponse({
    status: 201,
    type: Seat,
    description: 'The record has been successfully created',
  })
  async createSeat(@Body() seat: Seat) {
    const response = await this.seatService.createSeat(seat);
    this.client.emit('seat_created', response);
    return response;
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get seat by id' })
  @ApiResponse({
    status: 200,
    description: 'The found record',
    type: Seat,
  })
  async getSeat(@Param('id') seatId: number) {
    return this.seatService.getSeat(seatId);
  }

  @Get()
  @ApiOperation({ summary: 'Get all seats' })
  @ApiResponse({
    status: 200,
    description: 'The found records',
    type: Seat,
    isArray: true,
  })
  async getSeats() {
    return this.seatService.getSeats();
  }

  @Post('update')
  @ApiOperation({ summary: 'Update seat' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  async updateSeat(@Body() seat: Seat) {
    const response = await this.seatService.updateSeat(seat);
    this.client.emit('seat_updated', response);
    return response;
  }

  @Post(':id')
  @ApiOperation({ summary: 'Delete seat' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  async deleteSeat(@Param('id') seatId: number) {
    const response = await this.seatService.getSeat(seatId);
    this.client.emit('seat_deleted', response);
    return response;
  }
}
