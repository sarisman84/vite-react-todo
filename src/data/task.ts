import { archive_id } from "../hooks/useCategory";

export type OnTaskCreate = (
  owner_id: number,
  category_id: number,
  title: string,
  description: string,
) => void;

export type OnTaskRemove = (id: number) => void;
export type OnTaskMoved = (id: number, target_category_id: number) => void;
export type OnTaskArchived = (id: number) => void;

export type TaskEvents = {
  onTaskCreated: OnTaskCreate;
  onTaskRemoved: OnTaskRemove;
  onTaskMoved: OnTaskMoved;
  onTaskArchived: OnTaskArchived;
};

export interface Task {
  id: number;
  category_id: number;
  owner_id: number[];
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
    category_id: archive_id,
    owner_id: [1],
    metadata: {
      title: "Example Task",
      description: "This is an example task",
      completed: false,
      completion_date: Date.now(),
    },
  },
  {
    id: 2,
    category_id: archive_id,
    owner_id: [1],
    metadata: {
      title: "Another Example Task",
      description: "This is another example task",
      completed: false,
      completion_date: Date.now(),
    },
  },
  {
    id: 3,
    category_id: archive_id,
    owner_id: [1],
    metadata: {
      title: "Completed Task",
      description: "This is a completed task",
      completed: true,
      completion_date: Date.now(),
    },
  },
];

export const invalid_task: Task = {
  id: -1,
  category_id: -99999,
  owner_id: [],
  metadata: {
    title: "NaN",
    description: "NaN",
    completed: false,
    completion_date: Date.now(),
  },
};
