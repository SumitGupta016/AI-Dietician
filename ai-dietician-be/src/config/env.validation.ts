import { plainToInstance } from 'class-transformer';
import { IsEnum, IsNumber, IsString, validateSync } from 'class-validator';

enum Dialect {
  POSTGRES = 'postgres',
}

class EnvironmentVariables {
  @IsString()
  JWT_SECRET: string;

  @IsString()
  DB_HOST: string;

  @IsNumber()
  DB_PORT: number;

  @IsString()
  DB_NAME: string;

  @IsEnum(Dialect)
  DB_DIALECT: Dialect;

  @IsString()
  DB_PASSWORD: string;

  @IsString()
  DB_USERNAME: string;

  @IsString()
  OPENROUTER_API_KEY: string;

  @IsString()
  OPENROUTER_API_URL: string;
}

export function validate(config: Record<string, unknown>) {
  const validatedConfig = plainToInstance(EnvironmentVariables, config, {
    enableImplicitConversion: true,
  });
  const errors = validateSync(validatedConfig, {
    skipMissingProperties: false,
  });

  if (errors.length > 0) {
    throw new Error(errors.toString());
  }

  return validatedConfig;
}
