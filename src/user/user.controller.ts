import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { GoogleGuard } from 'src/google/google.guard';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('get-info')
  getInformation(@Req() req) {
    return this.userService.getInformation(req)
  }
}
