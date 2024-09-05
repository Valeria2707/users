import { UserData } from "./users.types";

export type FilterConfig = {
  field: keyof UserData;
  placeholder: string;
};
