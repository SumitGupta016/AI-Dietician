import { BelongsTo } from 'sequelize-typescript';
import { AuthTokenBase } from './auth-token.base';
import { UserBase } from '../user';

export class AuthToken extends AuthTokenBase {
  @BelongsTo(() => UserBase, { foreignKey: 'userId' })
  userDetails?: UserBase;
}
