import type { Category } from "../../../data/category";
import TaskBlock from "../task/task-block";
import { useState } from "react";
import type { AppData } from "../../../data/app";
import CategoryHeader from "./category-header";
import TaskCreateButton from "../task/task-create-button";
import TaskModal from "../task/task-modal";

interface CategoryBlockProps {
  root: AppData;
  category: Category;
}

function CategoryBlock(ctx: CategoryBlockProps) {
  const [taskModalOpenFlag, setTaskModalOpenFlag] = useState(false);
  const [currentTask, setCurrentTask] = useState(
    ctx.root.constants.invalid_task,
  );

  const filteredTasks = ctx.root.data.tasks.filter(
    (task) => task.category_id === ctx.category.id,
  );

  return (
    <div className="space-y-2 w-100 bg-background-200 rounded-md max-h-fit">
      <div className="flex flex-col gap-2">
        <CategoryHeader
          category={ctx.category}
          root={ctx.root}
          setTCWOpenFlag={setTaskModalOpenFlag}
        />

        {filteredTasks.map((task) => (
          <div key={task.id} className="px-2">
            <TaskBlock
              key={task.id}
              task={task}
              users={ctx.root.data.users}
              deleteTask={ctx.root.events.task.onTaskRemoved}
              setTCWOpenFlag={setTaskModalOpenFlag}
            />
          </div>
        ))}
      </div>
      <TaskCreateButton setTCWOpenFlag={setTaskModalOpenFlag} />
      <TaskModal
        root={ctx.root}
        task={currentTask}
        openFlag={taskModalOpenFlag}
        setOpenFlag={setTaskModalOpenFlag}
      />
    </div>
  );
}

export default CategoryBlock;
