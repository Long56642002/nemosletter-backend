import { Injectable } from "@nestjs/common";
import { PassportSerializer } from "@nestjs/passport";
import { GoogleService } from "./google.service";

@Injectable()
export class GoogleSerializer extends PassportSerializer {
  constructor(private googleService: GoogleService) {
    super();
  }

  serializeUser(user: any, done: Function) {
    done(null, user);
  }

  async deserializeUser(payload: any, done: Function) {
    const user = await this.googleService.findUser(payload)
    user ? done(null, user) : done(null, null);
  }
}