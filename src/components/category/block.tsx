import type { Task } from "../../data/task";
import TaskEntry from "../task/entry";
import CategoryTitle from "./title";

interface CategoryBlockContext {
  entries: Task[];
}

function CategoryBlock(ctx: CategoryBlockContext) {
  return (
    <div>
      <CategoryTitle />
      {ctx.entries.map((task) => (
        <TaskEntry task={task} />
      ))}
    </div>
  );
}

export default CategoryBlock;
