import type { Category } from "../../../data/category";
import TaskBlock from "../task/task-block";
import { useContext } from "react";
import CategoryHeader from "./category-header";
import TaskCreateButton from "../task/task-create-button";
import { Root } from "../../../data/context/root";

interface CategoryBlockProps {
  category: Category;
}

function CategoryBlock(ctx: CategoryBlockProps) {
  const { tasks } = useContext(Root);

  const filteredTasks = tasks.filter(
    (task) => task.categoryId === ctx.category.id,
  );

  return (
    <div className="space-y-2 w-100 bg-background-200 rounded-md max-h-fit">
      <div className="flex flex-col gap-2">
        <CategoryHeader
          category={ctx.category}
        />

        {filteredTasks.map((task) => (
          <div key={task.id} className="px-2">
            <TaskBlock
              key={task.id}
              task={task}
            />
          </div>
        ))}
      </div>
      <TaskCreateButton
        category={ctx.category}
      />
    </div>
  );
}

export default CategoryBlock;
