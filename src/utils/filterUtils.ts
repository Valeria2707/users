import { UserData, User } from "../types/users.types";

export const applyFilters = (users: User[], filters: UserData): User[] => {
  return users.filter((user) =>
    Object.keys(filters).every((key) => {
      const filterValue = filters[key as keyof UserData].toLowerCase();
      const userValue = (user[key as keyof UserData] as string).toLowerCase();
      return userValue.includes(filterValue);
    })
  );
};
