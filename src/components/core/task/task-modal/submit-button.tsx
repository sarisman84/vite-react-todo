import { useContext } from "react";
import { ModalEditMode } from "../../../../data/task-modal/modal-edit-mode";
import { Root } from "../../../../data/context/root";
import type { Task } from "../../../../data/task";
import type { Category } from "../../../../data/category";
import { Runtime } from "../../../../data/context/runtime";

interface SubmitButtonProps {
  targetTask: Task;
  targetCategory: Category;
  title: string;
  description: string;
  assignedUsers: number[];
}

function SubmitButton(ctx: SubmitButtonProps) {
  const { taskEvents } = useContext(Root);
  const { modalEditModeState, modalOpenState } = useContext(Runtime);
  
  const [modalEditMode, setModalEditMode] = modalEditModeState;
  const [, setModalOpenFlag] = modalOpenState;

  function _handleSubmit() {
    switch (modalEditMode) {
      case ModalEditMode.Create:
        taskEvents.createTask(
          ctx.assignedUsers,
          ctx.targetCategory.id,
          ctx.title,
          ctx.description,
        );
        setModalEditMode(ModalEditMode.View);
        setModalOpenFlag(false);
        break;
      case ModalEditMode.Edit:
        taskEvents.updateTask(
          ctx.targetTask.id,
          ctx.title,
          ctx.description,
          ctx.assignedUsers,
        );
        setModalEditMode(ModalEditMode.View);
        break;
    }
  }

  function _displayMessage() {
    switch (modalEditMode) {
      case ModalEditMode.Create:
        return "Create Task";
      case ModalEditMode.Edit:
        return "Save";
    }
  }

  return (
    <div className="flex bg-accent-300 hover:bg-accent-500 p-1 rounded-md shadow w-15 justify-center">
      <button className="p-0.5 text-text-800" onClick={_handleSubmit}>
        {_displayMessage()}
      </button>
    </div>
  );
}

export default SubmitButton;
