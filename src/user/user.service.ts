import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  getInformation(req) {
    return req.user
  }
}
