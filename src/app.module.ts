import { Module } from '@nestjs/common';
import { GoogleModule } from './google/google.module';
import { EmailModule } from './email/email.module';
import { UserModule } from './user/user.module';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [GoogleModule, EmailModule, UserModule, PassportModule.register({ session: true })],
})
export class AppModule {}
