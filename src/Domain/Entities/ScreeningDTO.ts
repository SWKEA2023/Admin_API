import { ApiProperty } from '@nestjs/swagger';

export class ScreeningDTO {
  @ApiProperty()
  movieId: number;

  @ApiProperty()
  hallId: number;

  @ApiProperty()
  startTime: Date;

  @ApiProperty()
  endTime: Date;
}
