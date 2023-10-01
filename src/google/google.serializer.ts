import { Injectable } from "@nestjs/common";
import { PassportSerializer } from "@nestjs/passport";

@Injectable()
export class GoogleSerializer extends PassportSerializer {
  constructor() {
    super();
  }

  serializeUser(user: any, done: Function) {
    done(null, user);
  }

  deserializeUser(payload: any, done: Function) {
    console.log(payload)
    done(null, payload);
  }
}