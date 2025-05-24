import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { LoggerService } from './core/logger';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get<ConfigService>(ConfigService);
  const servicePort = configService.get<number>('port') || 3000;
  await app.listen(servicePort).then(async () => {
    const logger = await app.resolve<LoggerService>(LoggerService);
    logger.info(`Listening on port ${servicePort}`);
  });
}
bootstrap()
  .then(() => {})
  .catch(() => {});
