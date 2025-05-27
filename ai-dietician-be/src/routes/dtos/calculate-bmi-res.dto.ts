import { ApiProperty } from '@nestjs/swagger';
import { BmiCategory } from '../enums/category.enum';

export class CalculateBmiResponseDto {
  @ApiProperty({
    description: 'Indicates if the BMI calculation was successful',
    example: true,
  })
  success: boolean;

  @ApiProperty({
    description: 'Calculated Body Mass Index (BMI)',
    example: 22.86,
  })
  bmi: number;

  @ApiProperty({
    description: 'BMI category based on the calculated value',
    enum: BmiCategory,
    example: BmiCategory.NORMAL,
  })
  category: BmiCategory;
}
