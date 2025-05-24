import { BelongsTo } from 'sequelize-typescript';
import { UserBase } from './user.base';
import { UserTypeBase } from '../user-type';

export class User extends UserBase {
  @BelongsTo(() => UserTypeBase, { foreignKey: 'userTypeId' })
  userTypeDetails?: UserTypeBase;
}
