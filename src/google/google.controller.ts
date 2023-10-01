import { Controller, Get, Req, UseGuards } from "@nestjs/common";
import { GoogleService } from "./google.service";
import { GoogleGuard } from "./google.guard";

@Controller('google')
@UseGuards(GoogleGuard)
export class GoogleController {
  constructor(private readonly googleService: GoogleService) {}

  @Get()
  async googleAuth(@Req() req) {}

  @Get('redirect')
  googleAuthRedirect(@Req() req) {
    return this.googleService.googleLogin(req)
  }
}