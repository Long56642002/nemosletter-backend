import { Module } from '@nestjs/common';
import { GoogleModule } from './google/google.module';
import { EmailModule } from './email/email.module';
import { UserModule } from './user/user.module';
import { PassportModule } from '@nestjs/passport';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true
  }), GoogleModule, EmailModule, UserModule, PassportModule.register({ session: true }), PrismaModule],
})
export class AppModule {}
