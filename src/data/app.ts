import type { Category, CategoryEvents } from "./category";

import type { Task, TaskEvents } from "./task";

import type { User, UserEvents } from "./user";

type Runtime = {
  currentUser: User;
};

type Data = {
  users: User[];
  tasks: Task[];
  categories: Category[];
};

type Events = {
  task: TaskEvents;
  category: CategoryEvents;
  user: UserEvents;
};

export type AppData = {
  data: Data;
  events: Events;
  runtime: Runtime;
};
