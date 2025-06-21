import { ApiProperty } from '@nestjs/swagger';
import { IsIn, IsNumber, Max, Min } from 'class-validator';

export class CalculateNutritionRequestDto {
  @ApiProperty({ example: 24.5, description: 'BMI of the user' })
  @IsNumber()
  bmi: number;

  @ApiProperty({ example: 20, description: 'Body fat percentage' })
  @IsNumber()
  bodyFatPercentage: number;

  @ApiProperty({
    example: 'male',
    description: 'Sex of the user',
    enum: ['male', 'female'],
  })
  @IsIn(['male', 'female'])
  sex: 'male' | 'female';

  @ApiProperty({
    example: 5,
    description: 'Number of days worked out in a week',
  })
  @IsNumber()
  @Min(0)
  @Max(7)
  workoutDaysPerWeek: number;

  @ApiProperty({
    example: 'weight-training',
    description: 'Type of workout',
    enum: ['cardio', 'weight-training', 'mixed'],
  })
  @IsIn(['cardio', 'weight-training', 'mixed'])
  workoutType: 'cardio' | 'weight-training' | 'mixed';
}
