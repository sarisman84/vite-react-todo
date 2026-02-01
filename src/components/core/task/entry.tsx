import type { Task } from "../../../data/task";

interface TaskEntryContext {
  task: Task;
}

function TaskEntry({ task }: TaskEntryContext) {
  return (
    <div className="flex items-center gap-1">
      <label className="flex grow items-center gap-2 rounded-md p-2 bg-accent-50 shadow hover:bg-accent-100">
        {task.metadata.title}
      </label>
    </div>
  );
}

export default TaskEntry;
