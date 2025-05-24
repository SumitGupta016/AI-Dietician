import {
  AllowNull,
  AutoIncrement,
  Column,
  CreatedAt,
  DataType,
  Default,
  DeletedAt,
  Model,
  PrimaryKey,
  Table,
  UpdatedAt,
} from 'sequelize-typescript';

type CreationColumns = 'typeName';

export type CreateUserTypeParams = Pick<UserTypeBase, CreationColumns>;

@Table({
  tableName: 'user_type',
  underscored: true,
})
export class UserTypeBase extends Model<UserTypeBase, CreateUserTypeParams> {
  @PrimaryKey
  @AutoIncrement
  @AllowNull(false)
  @Column(DataType.INTEGER)
  id!: number;

  @AllowNull(false)
  @Column(DataType.STRING(100))
  typeName!: string;

  @Default(true)
  @Column(DataType.BOOLEAN)
  status!: boolean;

  @CreatedAt
  createdAt?: Date;

  @UpdatedAt
  updatedAt?: Date;

  @DeletedAt
  deletedAt?: Date;
}
