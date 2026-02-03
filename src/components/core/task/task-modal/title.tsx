import { useContext } from "react";
import type { Task } from "../../../../data/task";
import { ModalEditMode } from "../../../../data/task-modal/modal-edit-mode";
import { Runtime } from "../../../../data/context/runtime";

interface TitleProps {
  task: Task;
  inputState: [string, (value: string) => void];
}
export function Title(ctx: TitleProps) {
  const { modalEditModeState } = useContext(Runtime);

  const [modalEditMode] = modalEditModeState;
  const [input, setInput] = ctx.inputState;

  return (
    <div className="flex">
      {modalEditMode !== ModalEditMode.View ? (
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="font-bold text-text-800"
          placeholder="New Task"
        />
      ) : (
        <h1 className="font-bold text-text-800">{ctx.task?.metadata?.title}</h1>
      )}
    </div>
  );
}
