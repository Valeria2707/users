import { User } from "../types/users.types";

export const fetchUsers = async (): Promise<User[]> => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    return await response.json();
  } catch (error) {
    throw new Error(`Failed to fetch users: ${(error as Error).message}`);
  }
};
