import { Dialect } from 'sequelize';

export interface DatabaseConfig {
  dialect: Dialect;
  host: string;
  port: number;
  user: string;
  password: string;
  name: string;
}
