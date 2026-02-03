import { createContext } from "react";
import type { Category } from "../category";
import type { Task } from "../task";
import type { ModalEditMode } from "../task-modal/modal-edit-mode";

export type RuntimeContext = {
  targetTaskState: [Task, (value: Task) => void];
  targetCategoryState: [Category, (value: Category) => void];

  modalOpenState: [boolean, (value: boolean) => void];
  modalEditModeState: [ModalEditMode, (value: ModalEditMode) => void];
};

export const Runtime = createContext<RuntimeContext>({} as RuntimeContext);
