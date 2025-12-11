export interface AdminType {
  id: string;
  created_at: string;
  last_login?: string;
  first_name: string;
  last_name: string;
  email: string;
  role_name: string;
  status: string;
}

export interface AdminFormType {
  firstName: string;
  lastName: string;
  role: string;
  email: string;
  phoneNumber: string;
  password: string;
  gender: string;
}
