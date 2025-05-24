import { LoggerService } from '../../core';
import { CreateUserTypeParams } from '../../models/user-type/user-type.base';
import { UserType } from '../../models/user-type/user-type.model';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { FindOptions, Transaction } from 'sequelize';

@Injectable()
export class UserTypeRepository {
  constructor(
    @InjectModel(UserType)
    private userTypeModel: typeof UserType,
    private readonly logger: LoggerService,
  ) {
    this.logger.serviceName = UserTypeRepository.name;
  }

  async createUserType(
    userType: CreateUserTypeParams,
    transaction?: Transaction,
  ): Promise<UserType> {
    this.logger.methodName = this.createUserType.name;
    return this.userTypeModel.create(userType, { transaction });
  }

  async findOneByClause(whereClause: FindOptions<UserType>) {
    this.logger.methodName = this.findOneByClause.name;
    return this.userTypeModel.findOne(whereClause);
  }

  async findAllByClause(whereClause: FindOptions<UserType>) {
    this.logger.methodName = this.findAllByClause.name;
    return this.userTypeModel.findAll(whereClause);
  }

  async findAll() {
    this.logger.methodName = this.findAll.name;
    return this.userTypeModel.findAll();
  }

  async updateUserType(
    userType: UserType,
    attributesToUpdate: Partial<UserType>,
    transaction?: Transaction,
  ): Promise<boolean> {
    this.logger.methodName = this.updateUserType.name;

    const recordUpdated = await userType.update(attributesToUpdate, {
      transaction,
    });
    return !!recordUpdated;
  }
}
