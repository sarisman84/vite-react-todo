import { archive_category } from "./category";

export type CreateTask = (
  owner_id: number[],
  category_id: number,
  title: string,
  description: string,
) => Task;

export type RemoveTask = (id: number) => void;
export type MoveTask = (id: number, target_category_id: number) => void;
export type ArchiveTask = (id: number) => void;
export type UpdateTask = (
  id: number,
  title: string,
  description: string,
  assignedUsers: number[],
) => void;

export type TaskEvents = {
  createTask: CreateTask;
  deleteTask: RemoveTask;
  moveTask: MoveTask;
  archiveTask: ArchiveTask;
  updateTask: UpdateTask;
};

export interface Task {
  id: number;
  categoryId: number;
  assignedUserIds: number[];
  metadata: Metadata;
}

export interface Metadata {
  title: string;
  description: string;
  completed: boolean;
  completion_date: number;
}

export const archiveExampleTasks: Task[] = [
  {
    id: 1,
    categoryId: archive_category.id,
    assignedUserIds: [1],
    metadata: {
      title: "Example Task",
      description: "This is an example task",
      completed: false,
      completion_date: Date.now(),
    },
  },
  {
    id: 2,
    categoryId: archive_category.id,
    assignedUserIds: [1],
    metadata: {
      title: "Another Example Task",
      description: "This is another example task",
      completed: false,
      completion_date: Date.now(),
    },
  },
  {
    id: 3,
    categoryId: archive_category.id,
    assignedUserIds: [1],
    metadata: {
      title: "Completed Task",
      description: "This is a completed task",
      completed: true,
      completion_date: Date.now(),
    },
  },
];

export const empty_task: Task = {
  id: -1,
  categoryId: -99999,
  assignedUserIds: [],
  metadata: {
    title: "",
    description: "",
    completed: false,
    completion_date: Date.now(),
  },
};
