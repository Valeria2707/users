export type UserData = {
  name: string;
  username: string;
  email: string;
  phone: string;
};

export type User = {
  id: number;
} & UserData;

export type UsersState = {
  data: User[];
  loading: boolean;
  error: string | null;
  filters: UserData;
};
