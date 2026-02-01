import type { Category } from "../../../data/category";
import type { Task, OnTaskCreate } from "../../../data/task";
import type { User } from "../../../data/user";
import TaskAddEntry from "../task/add-entry";
import TaskEntry from "../task/entry";
import CategoryTitle from "./title";

interface CategoryBlockContext {
  entries: Task[];
  category: Category;
  currentUser: User;
  updateCategoryTitle: (title: string, id: number) => void;
  onTaskCreate: OnTaskCreate;
}

function CategoryBlock(ctx: CategoryBlockContext) {
  return (
    <div className="flex flex-col p-2 space-y-2 w-100 min-h-100 max-h-full overflow-y-auto bg-slate-300 rounded-md justify-between">
      <div className="p-2 space-y-2">
        <CategoryTitle
          category={ctx.category}
          updateTitle={ctx.updateCategoryTitle}
        />
        {ctx.entries.map((task) => (
          <div key={task.id}>
            <TaskEntry key={task.id} task={task}/>
          </div>
        ))}
      </div>
      <TaskAddEntry
        category={ctx.category}
        onTaskCreate={ctx.onTaskCreate}
        user={ctx.currentUser}
      />
    </div>
  );
}

export default CategoryBlock;
