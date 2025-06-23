import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios from 'axios';
import { DEEPSEEK_LLM } from './constants/ai-llm.constant';

@Injectable()
export class OpenRouterService {
  constructor(private configService: ConfigService) {}

  async generateCompletion(messages: any[]) {
    const apiKey = this.configService.get('OPENROUTER_API_KEY');
    const apiUrl = this.configService.get('OPENROUTER_API_URL');
    if (!apiKey) {
      throw new Error('OPENROUTER_API_KEY not found in environment variables');
    }

    try {
      const response = await axios.post(
        apiUrl,
        {
          model: DEEPSEEK_LLM,
          messages,
        },
        {
          headers: {
            Authorization: `Bearer ${apiKey}`,
            'Content-Type': 'application/json',
          },
        },
      );

      console.log(69, response.data);

      return response.data;
    } catch (error) {
      throw new Error(`OpenRouter API error: ${(error as Error).message}`);
    }
  }
}
