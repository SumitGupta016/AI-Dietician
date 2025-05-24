import { UserBase } from '../../models';

export const USER_ATTRS: (keyof UserBase)[] = [
  'id',
  'firstName',
  'lastName',
  'emailAddress',
  'userTypeId',
  'status',
  'createdAt',
  'updatedAt',
];

export const USER_NAMES_ATTRS: (keyof UserBase)[] = ['firstName', 'lastName'];
