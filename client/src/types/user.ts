export type User = {
  email: string;
  password: string;
};

export type AuthUser = {
  user: User;
  token: string;
};

