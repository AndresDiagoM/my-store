export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  token?: string | undefined;
}

export interface createUserDTO extends Omit<User, 'id'>{}

export interface updateUserDTO extends Partial<createUserDTO>{}