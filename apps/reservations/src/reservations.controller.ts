import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { ReservationsService } from './reservations.service';
import { CurrentUser, JwtAuthGuard, UserDto } from '@app/common';
import { CreateReservationDto } from './dto/create-reservation.dto';

@Controller('reservations')
export class ReservationsController {
  constructor(private readonly reservationsService: ReservationsService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  async create(
    @Body() createReservationDto: CreateReservationDto,
    @CurrentUser() user: UserDto,
  ) {
    return this.reservationsService.create(createReservationDto, user);
  }
}
