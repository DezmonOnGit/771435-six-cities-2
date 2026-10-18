import {UserTypes} from './user-types.type.js';

export type User = {
  name: string;
  email: string;
  avatar?: string;
  password?: string;
  type?: UserTypes;
};
