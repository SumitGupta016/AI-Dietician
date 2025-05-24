import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService, JwtSignOptions } from '@nestjs/jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Request } from 'express';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { LoggerService } from '../../core/logger';
import {
  userUnauthorizedTokenExpired,
  userUnauthorizedTokenMismatch,
  userNotFound,
} from '../exceptions';
import { AuthTokenRepository, UserRepository } from '../../repository';
import { UserRole } from '../enums';
import { User, UserType } from '../../models';
import { JwtPayload } from '../interface/jwt-payload.interface';
import { JwtPayloadUserDetails } from '../interface/jwt-payload-user-details.interface';

@Injectable()
export class AuthService extends PassportStrategy(Strategy) {
  constructor(
    private jwtService: JwtService,
    configService: ConfigService,
    private readonly logger: LoggerService,
    private readonly userRepository: UserRepository,
    private readonly authTokenRepository: AuthTokenRepository,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: true,
      secretOrKey: configService.get<{ secret: string }>('jwt')?.secret,
      passReqToCallback: true,
    });
    this.logger.serviceName = AuthService.name;
  }

  async validate(
    req: Request,
    payload: JwtPayload,
  ): Promise<JwtPayloadUserDetails> {
    this.logger.methodName = this.validate.name;
    const { userId } = payload;
    const token = req.headers['authorization']?.split(' ')[1];
    let userRole: UserRole[] = [];
    if (!token || this.tokenExpired(token)) {
      throw new UnauthorizedException(userUnauthorizedTokenExpired());
    }
    let userDetails: User | null = null;
    if (userId) {
      userDetails = await this.userRepository.findOneByClause({
        where: {
          id: userId,
          status: true,
        },
        include: [{ model: UserType }],
      });
      if (!userDetails) {
        throw new UnauthorizedException(userNotFound());
      }
      const tokenValid = await this.authTokenRepository.verifyTokenValid(
        userDetails,
        token,
      );
      if (tokenValid) {
        userRole = this.userRepository.getUserRole(userDetails);
      } else {
        throw new UnauthorizedException(userUnauthorizedTokenMismatch());
      }
    }
    return {
      emailAddress: userDetails?.emailAddress,
      role: userRole || [],
      token,
      userId,
    };
  }

  tokenExpired(token: string): boolean {
    this.logger.methodName = this.tokenExpired.name;
    try {
      this.jwtService.verify(token);
      return false;
    } catch (error) {
      this.logger.error(error);
      return true;
    }
  }

  getPayloadFromToken(token: string): Promise<{ verificationId: string }> {
    this.logger.methodName = this.getPayloadFromToken.name;
    return this.jwtService.verifyAsync(token);
  }

  generateTokenFromPayload(payload: object, options?: JwtSignOptions) {
    this.logger.methodName = this.generateTokenFromPayload.name;
    return this.jwtService.sign(payload, options);
  }
}
