import { createContext } from "react";
import type { Category, CategoryEvents } from "../category";
import type { Task, TaskEvents } from "../task";
import type { ModalEditMode } from "../task-modal/modal-edit-mode";
import type { User, UserEvents } from "../user";

export type RootContext = {
  tasks: Task[];
  users: User[];
  categories: Category[];

  taskEvents: TaskEvents;
  userEvents: UserEvents;
  categoryEvents: CategoryEvents;

  runtime: RuntimeContext;
  taskModal: TaskModalContext;
};

export type RuntimeContext = {
  targetTaskState: [Task, (value: Task) => void];
  targetCategoryState: [Category, (value: Category) => void];
};

export type TaskModalContext = {
  modalOpenState: [boolean, (value: boolean) => void];
  modalEditModeState: [ModalEditMode, (value: ModalEditMode) => void];
};

export const Root = createContext<RootContext>({} as RootContext);
