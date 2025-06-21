import { Controller, Post, Body, Get, Param, Query } from '@nestjs/common';
import { OpenRouterService } from './openrouter.service';

@Controller('openrouter')
export class OpenRouterController {
  constructor(private readonly openRouterService: OpenRouterService) {}

  @Post('completion')
  async generateCompletion(
    @Body() body: { messages: any[]; model?: string },
    @Param('userId') userId: number
  ) {
    return this.openRouterService.generateCompletion(body.messages, body.model, userId);
  }

  @Get('history/:userId')
  async getHistory(
    @Param('userId') userId: number,
    @Query('limit') limit: number = 10
  ) {
    return this.openRouterService.getHistory(userId, limit);
  }
}
