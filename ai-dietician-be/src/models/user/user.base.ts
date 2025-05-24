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
  Unique,
  UpdatedAt,
} from 'sequelize-typescript';

type CreationColumns =
  | 'userTypeId'
  | 'firstName'
  | 'lastName'
  | 'emailAddress'
  | 'password';

export type CreateUserParams = Pick<UserBase, CreationColumns>;

@Table({
  tableName: 'users',
  underscored: true,
})
export class UserBase extends Model<UserBase, CreateUserParams> {
  @PrimaryKey
  @IsUUID('all')
  @Default(DataType.UUIDV4)
  @AllowNull(false)
  @Column(DataType.UUID)
  id!: string;

  @AllowNull(false)
  @Column(DataType.INTEGER)
  userTypeId!: number;

  @AllowNull(false)
  @Column(DataType.STRING(100))
  firstName!: string;

  @AllowNull(false)
  @Column(DataType.STRING(100))
  lastName!: string;

  @Column(DataType.STRING)
  emailAddress?: string;

  @Column
  password?: string;

  @Default(true)
  @Column(DataType.BOOLEAN)
  status!: boolean;

  @CreatedAt
  createdAt?: Date;

  @UpdatedAt
  updatedAt?: Date;

  @DeletedAt
  deletedAt?: Date;

  @Column
  createdBy?: string;

  @Column
  updatedBy?: string;

  @Column
  deletedBy?: string;
}
