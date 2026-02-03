import { Plus } from "lucide-react";

interface TaskCreateButtonProps {
  setOpenFlag: (value: boolean) => void;
}

function TaskCreateButton(ctx: TaskCreateButtonProps) {
  return (
    <div className="flex justify-center gap-1 px-2 pb-2">
      <button
        onClick={() => ctx.setOpenFlag(true)}
        className="flex items-center gap-2 rounded-md p-1 hover:bg-accent-100 grow px-2"
      >
        <Plus size={20} className="text-text-900 items-center w-4" />
        <label className="grow text-center text-text-900">Add New Task</label>
      </button>
    </div>
  );
}

export default TaskCreateButton;
