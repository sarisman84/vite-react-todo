import { useContext } from "react";
import { ModalEditMode } from "../../../../data/task-modal/modal-edit-mode";
import { Root } from "../../../../data/context/root";
import { empty_task, type Task } from "../../../../data/task";
import type { Category } from "../../../../data/category";
import { Runtime } from "../../../../data/context/runtime";

interface SubmitButtonProps {
  targetTaskState: [Task, (value: Task) => void];
  targetCategoryState: [Category, (value: Category) => void];
}

function SubmitButton(ctx: SubmitButtonProps) {
  const { taskEvents } = useContext(Root);
  const { modalEditModeState, modalOpenState } =
    useContext(Runtime);

  const [modalEditMode, setModalEditMode] = modalEditModeState;
  const [, setModalOpenFlag] = modalOpenState;

  const [tempTask, setTempTask] = ctx.targetTaskState;
  const [targetCategory] = ctx.targetCategoryState;

  function _handleSubmit() {
    switch (modalEditMode) {
      case ModalEditMode.Create:
        taskEvents.createTask(
          tempTask.assignedUserIds,
          targetCategory.id,
          tempTask.metadata.title,
          tempTask.metadata.description,
        );
        setModalEditMode(ModalEditMode.View);
        setModalOpenFlag(false);
        break;
      case ModalEditMode.Edit:
        const updatedTask = taskEvents.updateTask(
          tempTask.id,
          tempTask.metadata.title,
          tempTask.metadata.description,
          tempTask.assignedUserIds,
        );
        setModalEditMode(ModalEditMode.View);
        setTempTask(updatedTask ?? empty_task);
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
