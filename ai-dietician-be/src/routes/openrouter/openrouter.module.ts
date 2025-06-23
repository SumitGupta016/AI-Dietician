import { User } from '@/models';
import { OpenRouter } from '@/models/open-router/open-router.model';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { OpenRouterController } from './openrouter.controller';
import { OpenRouterService } from './openrouter.service';

@Module({
  imports: [ConfigModule],
  controllers: [OpenRouterController],
  providers: [OpenRouterService],
  exports: [OpenRouterService],
})
export class OpenRouterModule {
  static register() {
    return {
      module: OpenRouterModule,
      providers: [
        {
          provide: 'OpenRouter',
          useValue: OpenRouter,
        },
        {
          provide: 'User',
          useValue: User,
        },
      ],
    };
  }
}
