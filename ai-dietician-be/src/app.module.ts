import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ConfigModule } from '@nestjs/config';
import { DbModule } from './core/db/db.module';
import configuration from './config/app.config';
import { validate } from './config/env.validation';
import { LoggerModule } from './core/logger';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: ['.env'] }),
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
      validate,
    }),
    LoggerModule,
    DbModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
