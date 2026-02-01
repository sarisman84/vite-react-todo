import type { Category } from "../../data/category";
import type { Task } from "../../data/task";
import TaskEntry from "../task/entry";
import CategoryAddEntry from "./add-entry";
import CategoryTitle from "./title";

interface CategoryBlockContext {
  entries: Task[];
  category: Category;
  updateCategoryTitle: (title: string, id: number) => void;
}

function CategoryBlock(ctx: CategoryBlockContext) {
  return (
    <div className="bg-slate-300 rounded-md p-2 max-w-2xs space-y-2">
      <CategoryTitle
        category={ctx.category}
        updateTitle={ctx.updateCategoryTitle}
      />
      {ctx.entries.map((task) => (
        <p key={task.id}>
          <TaskEntry key={task.id} task={task} />
        </p>
      ))}
      <CategoryAddEntry />
    </div>
  );
}

export default CategoryBlock;
