import { useContext, useState } from "react";
import type { Task } from "../../../data/task";
import type { User } from "../../../data/user";
import Label from "../../elements/label";
import { Trash } from "lucide-react";
import { Root } from "../../../data/context/root";
import { Runtime } from "../../../data/context/runtime";
import { ModalEditMode } from "../../../data/task-modal/modal-edit-mode";
import type { Category } from "../../../data/category";

interface TaskBlockProps {
  task: Task;
}

function _getUser(id: number, users: User[]): User | undefined {
  return users.find((user) => user.id === id);
}

interface ToolbarProps {
  task: Task;
  mouseHover: boolean;
}

function Toolbar(ctx: ToolbarProps) {
  const { taskEvents } = useContext(Root);

  return (
    <div className="flex grow justify-end gap-1">
      {ctx.mouseHover && (
        <a
          className="flex flex-col justify-start"
          onClick={() => taskEvents.deleteTask(ctx.task.id)}
        >
          <Trash size={18} className="text-text-600 hover:text-text-900" />
        </a>
      )}
    </div>
  );
}

function _getCategory(
  id: number,
  categories: Category[],
): Category | undefined {
  return categories.find((category: Category) => category.id === id);
}

function TaskBlock(ctx: TaskBlockProps) {
  const { users, categories } = useContext(Root);
  const {
    modalOpenState,
    modalEditModeState,
    targetTaskState,
    targetCategoryState,
  } = useContext(Runtime);

  const [mouseHover, setMouseHover] = useState(false);
  const [, setOpenFlag] = modalOpenState;
  const [, setModalEditMode] = modalEditModeState;
  const [, setTargetTask] = targetTaskState;
  const [, setTargetCategory] = targetCategoryState;

  return (
    <>
      <button
        className="flex gap-1 w-full min-h-20"
        onMouseOver={() => setMouseHover(true)}
        onMouseOut={() => setMouseHover(false)}
        onClick={() => {
          setTargetTask(ctx.task);
          setTargetCategory(
            _getCategory(ctx.task.id, categories) ?? ({} as Category),
          );
          setOpenFlag(true);
          setModalEditMode(ModalEditMode.View);
        }}
      >
        <div className="flex justify-between grow gap-2 rounded-md p-2 bg-accent-50 shadow hover:bg-accent-100">
          <label>{ctx.task.metadata.title}</label>

          <div className="flex flex-col gap-1 ">
            <Toolbar mouseHover={mouseHover} task={ctx.task} />
            {ctx.task.assignedUserIds.map((owner) => (
              <Label
                key={owner}
                value={_getUser(owner, users)?.name ?? "Unknown"}
              />
            ))}
          </div>
        </div>
      </button>
    </>
  );
}

export default TaskBlock;
