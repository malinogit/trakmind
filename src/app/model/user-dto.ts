export class UserDto {
  id: number;
  username: string;
  enabled: boolean;
  accountNotExpired: boolean;
  credentialsNonExpired: boolean;
  accountNonLocked: boolean;
  roles: string[];
}
