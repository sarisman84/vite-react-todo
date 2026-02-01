import type { Category } from "../../data/category";
import type { OnTaskCreate, Task } from "../../data/task";
import TaskEntry from "../task/entry";
import TaskAddEntry from "../task/add-entry";
import CategoryTitle from "./title";

interface CategoryBlockContext {
  entries: Task[];
  category: Category;
  updateCategoryTitle: (title: string, id: number) => void;
  onTaskCreate: OnTaskCreate;
}

function CategoryBlock(ctx: CategoryBlockContext) {
  return (
    <div className="bg-slate-300 rounded-md p-2 max-w-2xs space-y-2">
      <CategoryTitle
        category={ctx.category}
        updateTitle={ctx.updateCategoryTitle}
      />
      {ctx.entries.map((task) => (
        <div key={task.id}>
          <TaskEntry key={task.id} task={task} />
        </div>
      ))}
      <TaskAddEntry category={ctx.category} onTaskCreate={ctx.onTaskCreate}/>
    </div>
  );
}

export default CategoryBlock;
