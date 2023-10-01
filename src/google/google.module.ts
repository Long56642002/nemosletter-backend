import { Module } from "@nestjs/common";
import { GoogleController } from "./google.controller";
import { GoogleService } from "./google.service";
import { GoogleStategy } from "./google.strategy";

@Module({
  controllers: [GoogleController],
  providers: [GoogleService, GoogleStategy],
})
export class GoogleModule {}