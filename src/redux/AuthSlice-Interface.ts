export interface UserInfo {
  dob: string;
  city: string;
  email: string;
  password: string;
  lastName: string;
  firstName: string;
  mobileNum: string;
}

export interface AuthInitialState {
  user: UserInfo;
  isLoggedIn: boolean;
}
