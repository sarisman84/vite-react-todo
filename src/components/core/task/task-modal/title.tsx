import { useContext } from "react";
import type { Task } from "../../../../data/task";
import { ModalEditMode } from "../../../../data/task-modal/modal-edit-mode";
import { Runtime } from "../../../../data/context/runtime";

interface TitleProps {
  taskState: [Task, (value: Task) => void];
}
export function Title(ctx: TitleProps) {
  const { modalEditModeState } = useContext(Runtime);

  const [modalEditMode] = modalEditModeState;
  const [task, setTask] = ctx.taskState;

  return (
    <div className="flex">
      {modalEditMode !== ModalEditMode.View ? (
        <input
          value={task.metadata.title}
          onChange={(e) =>
            setTask({
              ...task,
              metadata: { ...task.metadata, title: e.target.value },
            })
          }
          className="font-bold text-text-800"
          placeholder={task.metadata.title}
        />
      ) : (
        <h1 className="font-bold text-text-800">{task.metadata.title}</h1>
      )}
    </div>
  );
}
