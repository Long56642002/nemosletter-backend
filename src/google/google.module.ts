import { Module } from "@nestjs/common";
import { GoogleController } from "./google.controller";
import { GoogleService } from "./google.service";
import { GoogleStategy } from "./google.strategy";
import { GoogleSerializer } from "./google.serializer";

@Module({
  controllers: [GoogleController],
  providers: [GoogleService, GoogleSerializer, GoogleStategy],
})
export class GoogleModule {}