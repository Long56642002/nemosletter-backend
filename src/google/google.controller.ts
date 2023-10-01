import { Controller, Get, Req, UseGuards } from "@nestjs/common";
import { GoogleService } from "./google.service";
import { AuthGuard } from "@nestjs/passport";

@Controller('google')
@UseGuards(AuthGuard('google'))
export class GoogleController {
  constructor(private readonly googleService: GoogleService) {}

  @Get()
  async googleAuth(@Req() req) {}

  @Get('redirect')
  googleAuthRedirect(@Req() req) {
    return this.googleService.googleLogin(req)
  }
}