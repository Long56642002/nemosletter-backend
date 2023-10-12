import { Injectable } from '@nestjs/common';
import {config} from 'dotenv';
import { googleMail, oAuth2Client } from 'src/constant';
import { EmailOptions } from './email_options.type';
import * as nodemailer from 'nodemailer';

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

  async sendEmail(req, emailOption: EmailOptions) {
    try {
      const accessToken = (await oAuth2Client.getAccessToken()).token
      const auth : any = {
        type: 'OAuth2',
        user: req.user.email,
        clientId: oAuth2Client._clientId,
        clientSecret: oAuth2Client._clientSecret,
        refreshToken: process.env.REFRESH_TOKEN,
        accessToken: accessToken,
      }
      const transport = nodemailer.createTransport({
        service: 'gmail',
        auth: auth,
      })
      const result = await transport.sendMail({...emailOption, from: req.user.email })
      return result
    } catch (error) {
      console.log(error)
      return null;
    }
  }
}
