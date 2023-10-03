import { Injectable } from '@nestjs/common';
import { google } from 'googleapis';
import {config} from 'dotenv';

config();

@Injectable()
export class EmailService {
  googleMail = google.gmail('v1')
  oAuth2Client = new google.auth.OAuth2(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET,
    process.env.GOOGLE_CALLBACK_URL,
  )

  constructor() {
    this.oAuth2Client.setCredentials({ refresh_token: process.env.REFRESH_TOKEN, expiry_date: (new Date()).getTime() + (1000 * 60 * 60 * 24 * 7) })
  }

  async getEmailInformation(req) {
    const gmailInformation = await this.googleMail.users.getProfile({ auth: this.oAuth2Client, userId: req.user.email })
    return gmailInformation.data
  }

  async getEmailList(req) {
    const threads = this.googleMail.users.threads
    const gmailList = await threads.list({ auth: this.oAuth2Client, userId: req.user.email })
    return  gmailList.data
  }
}
