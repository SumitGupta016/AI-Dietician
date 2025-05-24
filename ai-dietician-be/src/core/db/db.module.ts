import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { DatabaseConfig } from './interface';

@Module({
  imports: [
    SequelizeModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (
        configService: ConfigService<Record<string, DatabaseConfig>>,
      ) => {
        const database = configService.get<DatabaseConfig>('database');
        if (!database) {
          throw new Error('Database config not provided');
        }
        return {
          autoLoadModels: true,
          database: database.name,
          define: {
            timestamps: false,
          },
          dialect: database.dialect,
          dialectOptions: {},
          host: database.host,
          logging: false,
          password: database.password,
          port: database.port,
          username: database.user,
        };
      },
      inject: [ConfigService],
    }),
  ],
})
export class DbModule {}
