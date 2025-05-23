import { Role } from '../auth/roles.enum';  
export class User {
  id: number;
  username: string;
  password: string;
  role: Role;
}