import { UserRole } from '../enums';

export interface JwtPayloadUserDetails {
  userId: string;
  token: string;
  role: Array<UserRole>;
  emailAddress?: string;
}
