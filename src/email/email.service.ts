import { Injectable } from '@nestjs/common';
import {config} from 'dotenv';
import { oAuth2Client, googleMail } from './email.constant';

config();

@Injectable()
export class EmailService {
  constructor() {
    oAuth2Client.setCredentials({ refresh_token: process.env.REFRESH_TOKEN, expiry_date: (new Date()).getTime() + (1000 * 60 * 60 * 24 * 7) })
  }

  async getEmailInformation(req) {
    const gmailInformation = await googleMail.users.getProfile({ auth: oAuth2Client, userId: req.user.email })
    return gmailInformation.data
  }

  async getEmailList(req) {
    const threads = googleMail.users.threads
    const gmailList = await threads.list({ auth: oAuth2Client, userId: req.user.email })
    return  gmailList.data
  }
}
