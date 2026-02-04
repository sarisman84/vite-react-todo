import { useContext } from "react";
import type { Task } from "../../../../data/task";
import { ModalEditMode } from "../../../../data/task-modal/modal-edit-mode";
import { Runtime } from "../../../../data/context/runtime";

interface DescriptionProps {
  task: Task;
  inputState: [string, (value: string) => void];
}

function Description(ctx: DescriptionProps) {
  const { modalEditModeState } = useContext(Runtime);

  const [modalEditMode] = modalEditModeState;
  const [input, setInput] = ctx.inputState;
  return (
    <div className="flex flex-col gap-1">
      <h1 className="font-bold text-sm text-text-800">Description</h1>
      <div className="bg-background-100 rounded-md shadow min-h-30 p-2">
        {modalEditMode !== ModalEditMode.View ? (
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={ctx.task?.metadata?.description ?? "Lorem Ipsum"}
            className="text-xs w-full min-h-30 text-text-900"
          />
        ) : (
          <p className="text-xs text-text-900">
            {ctx.task.metadata.description}
          </p>
        )}
      </div>
    </div>
  );
}

export default Description;
