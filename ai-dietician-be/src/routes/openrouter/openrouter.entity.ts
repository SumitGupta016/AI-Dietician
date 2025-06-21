import { Prisma } from '@prisma/client';

export type OpenRouterRequest = Prisma.OpenRouterRequest;

export enum RequestStatus {
  PENDING = 'PENDING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR',
}
