import { Body, Controller, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CalculateBmiRequestDto } from './dtos/calculate-bmi-request.dto';
import { CalculateBmiResponseDto } from './dtos/calculate-bmi-response.dto';
import { CalculateNutritionRequestDto } from './dtos/calculate-nutrition-request.dto';
import { CalculateNutritionResponseDto } from './dtos/calculate-nutrition-response.dto';
import { HealthService } from './health.service';

@ApiTags('Health')
@Controller('health')
export class HealthController {
  constructor(private readonly healthService: HealthService) {}

  @Post('calculate-bmi')
  @ApiOperation({ summary: 'Calculate BMI for a user' })
  @ApiResponse({
    status: 200,
    description: 'BMI calculated successfully',
    type: CalculateBmiResponseDto,
  })
  async calculateBMI(
    @Body() data: CalculateBmiRequestDto,
  ): Promise<CalculateBmiResponseDto> {
    return this.healthService.calculateBMI(data);
  }

  @Post('calculate-nutrition')
  @ApiOperation({
    summary:
      'Calculate nutritional requirements based on BMI, body fat %, sex, and workout type',
  })
  @ApiResponse({
    status: 200,
    description: 'Nutrition calculated successfully',
    type: CalculateNutritionResponseDto,
  })
  async calculateNutrition(
    @Body() data: CalculateNutritionRequestDto,
  ): Promise<CalculateNutritionResponseDto> {
    return this.healthService.calculateNutrition(data);
  }
}
