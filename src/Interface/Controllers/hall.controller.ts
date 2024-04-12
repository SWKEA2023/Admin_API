import { Body, Controller, Get, Inject, Param, Post } from '@nestjs/common';
import { HallService } from '../../Domain/Service/hall.service';
import { Hall } from '../../Domain/Entities/Hall';
import { ClientProxy } from '@nestjs/microservices';
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

@ApiBearerAuth()
@ApiTags('Halls')
@Controller('hall')
export class HallController {
  constructor(
    private readonly hallService: HallService,
    @Inject('HALL_QUEUE')
    private readonly client: ClientProxy,
  ) {}

  @Post()
  @ApiOperation({ summary: 'Create hall' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiCreatedResponse({
    status: 201,
    type: Hall,
    description: 'The record has been successfully created',
  })
  async createHall(@Body() hall: Hall) {
    const response = await this.hallService.createHall(hall);
    this.client.emit('hall_created', response);
    return response;
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get hall by id' })
  @ApiResponse({
    status: 200,
    description: 'The found record',
    type: Hall,
  })
  async getHall(@Param('id') hallId: number) {
    return this.hallService.getHall(hallId);
  }

  @Get()
  @ApiOperation({ summary: 'Get all halls' })
  @ApiResponse({
    status: 200,
    description: 'The found records',
    type: Hall,
    isArray: true,
  })
  async getHalls() {
    return this.hallService.getHalls();
  }

  @Post('update')
  @ApiOperation({ summary: 'Update hall' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  async updateHall(@Body() hall: Hall) {
    return this.hallService.updateHall(hall);
  }

  @Post(':id')
  @ApiOperation({ summary: 'Delete hall' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  async deleteHall(@Param('id') hallId: number) {
    return this.hallService.deleteHall(hallId);
  }
}
