export interface LoginProps {
  email: string;
  password: string;
}

export interface User {
  id: string;
  first_name: string;
  last_name: string;
  status: string;
  email: string;
  phone_number: string;
  date_of_birth: null | string;
  username: null | string;
  gender: string;
  last_login: string;
  role_name: string;
  permissions: string[];
}

export interface UserState {
  user: User | null;
  isAuthenticated: boolean;
}
