import { Body, Controller, Get, Inject, Param, Post } from '@nestjs/common';
import { TicketService } from '../../Domain/Service/ticket.service';
import { Ticket } from '../../Domain/Entities/Ticket';
import { ClientProxy, MessagePattern } from '@nestjs/microservices';
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

@ApiBearerAuth()
@ApiTags('Tickets')
@Controller('ticket')
export class TicketController {
  constructor(
    private readonly ticketService: TicketService,
    @Inject('TICKET_QUEUE')
    private readonly client: ClientProxy,
  ) {}

  @Post()
  @ApiOperation({ summary: 'Create ticket' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiCreatedResponse({
    status: 201,
    type: Ticket,
    description: 'The record has been successfully created',
  })
  async createTicket(@Body() ticket: Ticket) {
    return this.ticketService.createTicket(ticket);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get ticket by id' })
  @ApiResponse({
    status: 200,
    description: 'The found record',
    type: Ticket,
  })
  async getTicket(@Param('id') ticketId: number) {
    return this.ticketService.getTicket(ticketId);
  }

  @Get()
  @ApiOperation({ summary: 'Get all tickets' })
  @ApiResponse({
    status: 200,
    description: 'The found records',
    type: Ticket,
    isArray: true,
  })
  async getTickets() {
    return this.ticketService.getTickets();
  }

  @Post('update')
  @ApiOperation({ summary: 'Update ticket' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  async updateTicket(@Body() ticket: Ticket) {
    return this.ticketService.updateTicket(ticket);
  }

  @Post(':id')
  @ApiOperation({ summary: 'Delete ticket' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  async deleteTicket(@Param('id') ticketId: number) {
    return this.ticketService.deleteTicket(ticketId);
  }

  @MessagePattern('created_order')
  async screeningsList(data: any) {
    const ticketCreated = await this.ticketService.createTicket(data);
    console.log('Ticket created', ticketCreated);
    
  }
}
