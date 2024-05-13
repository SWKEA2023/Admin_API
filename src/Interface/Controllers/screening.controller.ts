import { Body, Controller, Get, Inject, Param, Post } from '@nestjs/common';
import { ScreeningService } from '../../Domain/Service/screening.service';
import { Screening } from '../../Domain/Entities/Screening';
import { ClientProxy } from '@nestjs/microservices';
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { ScreeningDTO } from 'src/Domain/Entities/ScreeningDTO';

@ApiBearerAuth()
@ApiTags('Screenings')
@Controller('screening')
export class ScreeningController {
  constructor(
    private readonly screeningService: ScreeningService,
    @Inject('SCREENING_QUEUE')
    private readonly client: ClientProxy,
  ) {}

  @Post()
  @ApiOperation({ summary: 'Create screening' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiCreatedResponse({
    status: 201,
    type: Screening,
    description: 'The record has been successfully created',
  })
  async createScreening(@Body() screening: ScreeningDTO) {
    const response = await this.screeningService.createScreening(screening);
    this.client.emit('screening_created', response);
    return response;
  }

  @Get('es')
  @ApiOperation({ summary: 'Get all screenings' })
  @ApiResponse({
    status: 200,
    description: 'The found records',
    type: Screening,
    isArray: true,
  })
  async getScreeningsEs() {
    const response = await this.screeningService.getScreenings();
    this.client.emit('screenings_list', response);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get screening by id' })
  @ApiResponse({
    status: 200,
    description: 'The found record',
    type: Screening,
  })
  async getScreening(@Param('id') screeningId: number) {
    return this.screeningService.getScreening(screeningId);
  }

  @Get()
  @ApiOperation({ summary: 'Get all screenings' })
  @ApiResponse({
    status: 200,
    description: 'The found records',
    type: Screening,
    isArray: true,
  })
  async getScreenings() {
    return this.screeningService.getScreenings();
  }

  @Post('update')
  @ApiOperation({ summary: 'Update screening' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  async updateScreening(@Body() screening: Screening) {
    const response = await this.screeningService.updateScreening(screening);
    this.client.emit('screening_updated', response);
    return response;
  }

  @Post(':id')
  @ApiOperation({ summary: 'Delete screening' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  async deleteScreening(@Param('id') screeningId: number) {
    const response = await this.screeningService.deleteScreening(screeningId);
    this.client.emit('screening_deleted', screeningId);
    return response;
  }
}
