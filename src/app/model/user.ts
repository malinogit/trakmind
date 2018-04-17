import {UserAccess} from './user-access';

export class User {
  username: string;
  password: string;
  userAccess: UserAccess;

  constructor() {
    this.username = '';
    this.password = '';
  }
}
