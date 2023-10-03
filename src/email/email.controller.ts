import { Controller, Get, Req } from '@nestjs/common';
import { EmailService } from './email.service';

@Controller('email')
export class EmailController {
  constructor(private readonly emailService: EmailService) {}

  @Get('get-email-info')
  async getEmailInfo(@Req() req) {
    var result = await this.emailService.getEmailInformation(req)
    return result
  }

  @Get('list')
  async getEmailList(@Req() req) {
    var result = this.emailService.getEmailList(req)
    return result
  }
}
