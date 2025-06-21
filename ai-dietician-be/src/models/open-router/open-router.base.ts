import { Column, Model, Table, DataType, BelongsTo, ForeignKey } from 'sequelize-typescript';
import { User } from '../user/user.model';

@Table({ tableName: 'open_router_requests' })
export class OpenRouterBase extends Model {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  model: string;

  @Column({
    type: DataType.JSON,
    allowNull: false,
  })
  messages: any;

  @Column({
    type: DataType.JSON,
  })
  response: any;

  @Column({
    type: DataType.ENUM('PENDING', 'SUCCESS', 'ERROR'),
    defaultValue: 'PENDING',
  })
  status: string;

  @Column({
    type: DataType.STRING,
  })
  error: string;

  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
  })
  userId: number;

  @BelongsTo(() => User)
  user: User;
}
