import { BadRequestException, Injectable } from '@nestjs/common';
import { CalculateBmiRequestDto } from '../dtos/calculate-bmi-req.dto';
import { CalculateBmiResponseDto } from '../dtos/calculate-bmi-res.dto';
import { CalculateNutritionRequestDto } from '../dtos/calculate-nutrition.req.dto';
import { CalculateNutritionResponseDto } from '../dtos/calculate-nutrition.res.dto';
import { BmiCategory } from '../enums/category.enum';

@Injectable()
export class HealthService {
  async calculateBMI(
    data: CalculateBmiRequestDto,
  ): Promise<CalculateBmiResponseDto> {
    const { height, weight } = data;

    if (!height || !weight || height <= 0 || weight <= 0) {
      throw new BadRequestException(
        'Height and weight must be positive numbers',
      );
    }

    const bmi = weight / (height * height);
    const bmiRounded = parseFloat(bmi.toFixed(2));

    let category: BmiCategory;
    if (bmi < 18.5) category = BmiCategory.UNDERWEIGHT;
    else if (bmi < 25) category = BmiCategory.NORMAL;
    else if (bmi < 30) category = BmiCategory.OVERWEIGHT;
    else category = BmiCategory.OBESE;

    return {
      success: true,
      bmi: bmiRounded,
      category,
    };
  }

  async calculateNutrition(
    data: CalculateNutritionRequestDto,
  ): Promise<CalculateNutritionResponseDto> {
    const { bmi, bodyFatPercentage, sex, workoutDaysPerWeek, workoutType } =
      data;

    if (bmi <= 0 || bodyFatPercentage <= 0) {
      throw new BadRequestException(
        'BMI and body fat % must be positive values.',
      );
    }

    // Estimate activity level multiplier
    let activityMultiplier = 1.2;
    if (workoutDaysPerWeek >= 5) {
      activityMultiplier = 1.725;
    } else if (workoutDaysPerWeek >= 3) {
      activityMultiplier = 1.55;
    } else if (workoutDaysPerWeek >= 1) {
      activityMultiplier = 1.375;
    }

    // Estimate weight from BMI and assume average height (1.75 m)
    const height = 1.75; // in meters
    const weight = bmi * height * height; // derived from BMI = weight / height²

    // Estimate BMR using Mifflin-St Jeor
    const heightCm = height * 100;
    const age = 25; // average default
    const bmr =
      sex === 'male'
        ? 10 * weight + 6.25 * heightCm - 5 * age + 5
        : 10 * weight + 6.25 * heightCm - 5 * age - 161;

    const tdee = bmr * activityMultiplier;

    // Determine goal
    let goal = '';
    if (bmi < 18.5 || bodyFatPercentage < 12) {
      goal = 'muscle-building';
    } else if (bmi > 25 || bodyFatPercentage > 25) {
      goal = 'fat-loss';
    } else {
      goal = 'maintenance';
    }

    // Adjust calories based on goal
    let calories = tdee;
    if (goal === 'muscle-building') {
      calories *= 1.15; // 15% surplus
    } else if (goal === 'fat-loss') {
      calories *= 0.85; // 15% deficit
    }

    // Macronutrient breakdown (grams per kg body weight)
    let proteinPerKg = 1.8;
    let carbsPerKg = 3;
    let fatPerKg = 0.9;

    if (goal === 'muscle-building') {
      proteinPerKg = 2.2;
      carbsPerKg = 4.5;
      fatPerKg = 1;
    } else if (goal === 'fat-loss') {
      proteinPerKg = 2.5;
      carbsPerKg = 2.5;
      fatPerKg = 0.8;
    }

    const protein = Math.round(proteinPerKg * weight);
    const carbs = Math.round(carbsPerKg * weight);
    const fat = Math.round(fatPerKg * weight);

    return {
      success: true,
      goal,
      calories: Math.round(calories),
      protein,
      carbs,
      fat,
    };
  }
}
