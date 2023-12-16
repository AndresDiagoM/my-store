export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  token?: string | undefined;
  role?: 'customer' | 'admin';
}

export type createUserDTO = Omit<User, 'id'>

export type updateUserDTO = Partial<createUserDTO>