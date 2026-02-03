import type { Category } from "../../../data/category";
import CategoryCreateTaskModal from "./category-create-task-modal";
import TaskBlock from "../task/task-block";
import { useState } from "react";
import type { AppData } from "../../../data/app";
import CategoryHeader from "./category-header";
import TaskCreateButton from "../task/task-create-button";

interface CategoryBlockProps {
  root: AppData;
  category: Category;
}

function CategoryBlock(ctx: CategoryBlockProps) {
  const [openFlag, setOpenFlag] = useState<boolean>(false);
  const filteredTasks = ctx.root.data.tasks.filter(
    (task) => task.category_id === ctx.category.id,
  );

  return (
    <div className="p-2 space-y-2 w-100 bg-background-200 rounded-md max-h-fit">
      <div className="p-2 space-y-2">
        <CategoryHeader
          category={ctx.category}
          root={ctx.root}
          setOpenFlag={setOpenFlag}
        />

        {filteredTasks.map((task) => (
          <div key={task.id}>
            <TaskBlock
              key={task.id}
              task={task}
              users={ctx.root.data.users}
              deleteTask={ctx.root.events.task.onTaskRemoved}
            />
          </div>
        ))}
      </div>
      <TaskCreateButton setOpenFlag={setOpenFlag} />
      <CategoryCreateTaskModal
        category={ctx.category}
        user={ctx.root.runtime.currentUser}
        root={ctx.root}
        openFlag={openFlag}
        setOpenFlag={setOpenFlag}
      />
    </div>
  );
}

export default CategoryBlock;
