import { Global, Module } from '@nestjs/common';
import { LoggerModule } from '../core';
import { ConfigModule } from '@nestjs/config';
import { UserRepository } from './user';
import { UserTypeRepository } from './user-type';
import { AuthTokenRepository } from './auth-token';

const repositories = [
  UserRepository,
  UserTypeRepository,
  AuthTokenRepository,
];

@Global()
@Module({
  imports: [LoggerModule, ConfigModule],
  providers: repositories,
  exports: repositories,
})
export class RepositoryModule {}

export * from './auth-token';
export * from './user';
export * from './user-type';
