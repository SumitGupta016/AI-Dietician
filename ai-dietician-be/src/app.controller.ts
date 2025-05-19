import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get('/')
  home(): string {
    return 'AI Dietician Backend | status: Ok';
  }
}
