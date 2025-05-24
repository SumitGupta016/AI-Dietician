import { Global, Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './user';
import { UserType } from './user-type';
import { AuthToken } from './auth-token';

const models = [AuthToken, User, UserType];

@Global()
@Module({
  imports: [SequelizeModule.forFeature(models)],
  exports: [SequelizeModule.forFeature(models)],
})
export class ModelsModule {}

export * from './auth-token';
export * from './user';
export * from './user-type';
