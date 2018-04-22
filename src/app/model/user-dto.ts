import {Privilege} from './privilege.enum';

export class UserDto {
  id: number;
  username: string;
  password: string;
  email: string;
  enabled: boolean;
  accountNotExpired: boolean;
  credentialsNonExpired: boolean;
  accountNonLocked: boolean;
  roles: string[];
  privileges: string[];
}
