import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios from 'axios';

@Injectable()
export class OpenRouterService {
  private readonly OPENROUTER_API_URL = 'https://openrouter.ai/api/v1/chat/completions';

  constructor(private configService: ConfigService) {}

  async generateCompletion(messages: any[], model: string = 'deepseek/deepseek-r1:free') {
    const apiKey = this.configService.get('OPENROUTER_API_KEY');
    if (!apiKey) {
      throw new Error('OPENROUTER_API_KEY not found in environment variables');
    }

    try {
      const response = await axios.post(this.OPENROUTER_API_URL, {
        model,
        messages,
      }, {
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
          'HTTP-Referer': this.configService.get('SITE_URL') || '',
          'X-Title': this.configService.get('SITE_NAME') || '',
        },
      });

      return response.data;
    } catch (error) {
      throw new Error(`OpenRouter API error: ${error.message as Error}`);
    }
  }
}
