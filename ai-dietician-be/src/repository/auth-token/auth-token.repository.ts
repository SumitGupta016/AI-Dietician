import { AuthToken, CreateAuthTokenParams, User } from '../../models';
import { LoggerService } from '../../core';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { FindOptions, Transaction } from 'sequelize';
import { OrderBy } from '../../common/enums/order-by.enum';
import { AUTH_TOKEN_ORDER_BY_COL } from './auth-token-repository.constant';

@Injectable()
export class AuthTokenRepository {
  constructor(
    @InjectModel(AuthToken)
    private authTokenModel: typeof AuthToken,
    private readonly logger: LoggerService,
  ) {
    this.logger.serviceName = AuthTokenRepository.name;
  }

  async createAuthToken(
    authToken: CreateAuthTokenParams,
    transaction?: Transaction,
  ): Promise<AuthToken> {
    this.logger.methodName = this.createAuthToken.name;
    return this.authTokenModel.create(authToken, { transaction });
  }

  async findOneByClause(whereClause: FindOptions<AuthToken>) {
    this.logger.methodName = this.findOneByClause.name;
    return this.authTokenModel.findOne(whereClause);
  }

  async findAllByClause(whereClause: FindOptions<AuthToken>) {
    this.logger.methodName = this.findAllByClause.name;
    return this.authTokenModel.findAll(whereClause);
  }

  async findAll() {
    this.logger.methodName = this.findAll.name;
    return this.authTokenModel.findAll();
  }

  async updateAuthToken(
    authToken: AuthToken,
    attributesToUpdate: Partial<AuthToken>,
    transaction?: Transaction,
  ): Promise<boolean> {
    this.logger.methodName = this.updateAuthToken.name;

    const recordUpdated = await authToken.update(attributesToUpdate, {
      transaction,
    });
    return !!recordUpdated;
  }

  async verifyTokenValid(user: User, token: string): Promise<boolean> {
    this.logger.methodName = this.verifyTokenValid.name;
    if (!user.id) {
      return false;
    }
    const authToken = await this.findOneByClause({
      where: {
        userId: user.id,
      },
      order: [[AUTH_TOKEN_ORDER_BY_COL, OrderBy.DESC]],
    });
    return !!authToken && authToken.tokenActive && authToken.token === token;
  } 
}
