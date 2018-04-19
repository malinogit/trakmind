import {Privilege} from './privilege.enum';

export class UserDto {
  id: number;
  username: string;
  enabled: boolean;
  accountNotExpired: boolean;
  credentialsNonExpired: boolean;
  accountNonLocked: boolean;
  roles: string[];
  privileges: Privilege[];
}
