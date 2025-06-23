import { ApiProperty } from '@nestjs/swagger';

export class CalculateNutritionResponseDto {
  @ApiProperty()
  success: boolean;

  @ApiProperty({ example: 'muscle-building' })
  goal: string;

  @ApiProperty({ example: 2600 })
  calories: number;

  @ApiProperty({ example: 160, description: 'Protein in grams per day' })
  protein: number;

  @ApiProperty({ example: 330, description: 'Carbs in grams per day' })
  carbs: number;

  @ApiProperty({ example: 70, description: 'Fat in grams per day' })
  fat: number;
}
