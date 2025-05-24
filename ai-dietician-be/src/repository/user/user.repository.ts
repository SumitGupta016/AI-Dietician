import { CreateUserParams, User } from '../../models/user';
import { LoggerService } from '../../core';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { FindOptions, Transaction, FindAndCountOptions } from 'sequelize';
import { UserRole } from '../../common/enums';

@Injectable()
export class UserRepository {
  constructor(
    @InjectModel(User)
    private usersModel: typeof User,
    private readonly logger: LoggerService,
  ) {
    this.logger.serviceName = UserRepository.name;
  }

  async createUser(
    user: CreateUserParams,
    transaction?: Transaction,
  ): Promise<User> {
    this.logger.methodName = this.createUser.name;
    return this.usersModel.create(user, { transaction });
  }

  getUserRole(user: User): Array<UserRole> {
    this.logger.methodName = this.getUserRole.name;
    const userRole: UserRole[] = [];
    if (user.id) {
      userRole.push(UserRole.USER);
    }
    if (user.userTypeDetails?.typeName === UserRole.ADMIN) {
      userRole.push(UserRole.ADMIN);
    }
    return userRole;
  }

  async findOneByClause(whereClause: FindOptions<User>) {
    this.logger.methodName = this.findOneByClause.name;
    return this.usersModel.findOne(whereClause);
  }

  async findAllByClause(whereClause: FindOptions<User>) {
    this.logger.methodName = this.findAllByClause.name;
    return this.usersModel.findAll(whereClause);
  }

  async findAll() {
    this.logger.methodName = this.findAll.name;
    return this.usersModel.findAll();
  }

  async updateUser(
    user: User,
    attributesToUpdate: Partial<User>,
    transaction?: Transaction,
  ): Promise<boolean> {
    this.logger.methodName = this.updateUser.name;

    const recordUpdated = await user.update(attributesToUpdate, {
      transaction,
    });
    return !!recordUpdated;
  }

  findAndCountAllByClause(clause: FindAndCountOptions<User>) {
    this.logger.methodName = this.findAndCountAllByClause.name;
    return this.usersModel.findAndCountAll(clause);
  }
}
