import { Injectable } from "@nestjs/common";

@Injectable()
export class GoogleService {
  googleLogin(req) {
    if(!req.user) {
      return 'No user'
    }

    return req.user
  }
}