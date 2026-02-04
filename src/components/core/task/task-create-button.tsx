import { Plus } from "lucide-react";
import type { Category } from "../../../data/category";
import { useContext } from "react";
import { Runtime } from "../../../data/context/runtime";
import { ModalEditMode } from "../../../data/task-modal/modal-edit-mode";
import { empty_task, type Task } from "../../../data/task";

interface TaskCreateButtonProps {
  category: Category;
}

function TaskCreateButton(ctx: TaskCreateButtonProps) {
  const {
    modalOpenState,
    modalEditModeState,
    targetCategoryState,
    targetTaskState,
  } = useContext(Runtime);

  const [, setOpenFlag] = modalOpenState;
  const [, setEditFlag] = modalEditModeState;
  const [, setTargetCategory] = targetCategoryState;
  const [, setTargetTask] = targetTaskState;

  function _createNewTask() {
    setTargetTask(empty_task);
    setTargetCategory(ctx.category);
    setEditFlag(ModalEditMode.Create);
    setOpenFlag(true);
  }

  return (
    <div className="flex justify-center gap-1 px-2 pb-2">
      <button
        onClick={_createNewTask}
        className="flex items-center gap-2 rounded-md p-1 hover:bg-accent-100 grow px-2"
      >
        <Plus size={20} className="text-text-900 items-center w-4" />
        <label className="grow text-center text-text-900">Add New Task</label>
      </button>
    </div>
  );
}

export default TaskCreateButton;
