import type { User } from "./user";

export type Project = {
  id: number;
  name: string;
  assignedUsers: User[];
};
