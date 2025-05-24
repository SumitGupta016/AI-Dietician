import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PassportModule } from '@nestjs/passport';
import { LoggerModule } from '../../core/logger';
import { AuthService } from './auth.service';
import { JwtAuthModule } from './jwt.module';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtAuthModule,
    ConfigModule,
    LoggerModule,
  ],
  providers: [AuthService],
  exports: [JwtAuthModule, AuthService],
})
export class AuthModule {}
