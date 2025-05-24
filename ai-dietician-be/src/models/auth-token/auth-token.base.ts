import {
  AllowNull,
  Column,
  CreatedAt,
  DataType,
  Default,
  DeletedAt,
  IsUUID,
  Model,
  PrimaryKey,
  Table,
  UpdatedAt,
} from 'sequelize-typescript';

type CreationColumns = 'userId' | 'token' | 'loginTime';

export type CreateAuthTokenParams = Pick<AuthTokenBase, CreationColumns>;

@Table({
  tableName: 'auth_tokens',
  underscored: true,
})
export class AuthTokenBase extends Model<AuthTokenBase, CreateAuthTokenParams> {
  @PrimaryKey
  @IsUUID('all')
  @Default(DataType.UUIDV4)
  @AllowNull(false)
  @Column(DataType.UUID)
  id!: string;

  @AllowNull(false)
  @Column(DataType.UUID)
  userId!: string;

  @AllowNull(false)
  @Column
  token!: string;

  @Default(true)
  @Column(DataType.BOOLEAN)
  tokenActive!: boolean;

  @CreatedAt
  createdAt?: Date;

  @Column(DataType.DATE)
  loginTime?: Date;

  @Column(DataType.DATE)
  logoutTime?: Date;

  @DeletedAt
  deletedAt?: Date;

  @Column
  createdBy?: string;

  @Column
  deletedBy?: string;

  @UpdatedAt
  updatedAt?: Date;
}
