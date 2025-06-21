import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, Min } from 'class-validator';

export class CalculateBmiRequestDto {
  @ApiProperty({
    description: 'Height of the user in meters',
    example: 1.75,
  })
  @IsNumber()
  @Min(0.1, { message: 'Height must be greater than 0' })
  height: number;

  @ApiProperty({
    description: 'Weight of the user in kilograms',
    example: 70,
  })
  @IsNumber()
  @Min(1, { message: 'Weight must be greater than 0' })
  weight: number;
}
