import { useState } from "react";
import type { OnTaskRemove, Task } from "../../../data/task";
import type { User } from "../../../data/user";
import Label from "../../elements/label";
import { Trash } from "lucide-react";

interface TaskBlockProps {
  task: Task;
  users: User[];
  deleteTask: OnTaskRemove;
}

interface ToolbarProps {
  task: Task;
  mouseHover: boolean;
  deleteTask: OnTaskRemove;
}

function _getUser(id: number, users: User[]): User | undefined {
  return users.find((user) => user.id === id);
}

function Toolbar(ctx: ToolbarProps) {
  return (
    <div className="flex grow justify-end gap-1">
      {ctx.mouseHover && (
        <a
          className="flex flex-col justify-start"
          onClick={() => ctx.deleteTask(ctx.task.id)}
        >
          <Trash size={18} className="text-text-600 hover:text-text-900" />
        </a>
      )}
    </div>
  );
}

function TaskBlock(ctx: TaskBlockProps) {
  //const [editFlag, setEditFlag] = useState(false);
  const [mouseHover, setMouseHover] = useState(false);

  return (
    <>
      <button
        className="flex gap-1 w-full min-h-20"
        onMouseOver={() => setMouseHover(true)}
        onMouseOut={() => setMouseHover(false)}
      >
        <div className="flex justify-between grow gap-2 rounded-md p-2 bg-accent-50 shadow hover:bg-accent-100">
          <label>{ctx.task.metadata.title}</label>

          <div className="flex flex-col gap-1 ">
            <Toolbar
              mouseHover={mouseHover}
              task={ctx.task}
              deleteTask={ctx.deleteTask}
            />
            {ctx.task.owner_id.map((owner) => (
              <Label
                key={owner}
                value={_getUser(owner, ctx.users)?.name ?? "Unknown"}
              />
            ))}
          </div>
        </div>
      </button>
    </>
  );
}

export default TaskBlock;
