import type { Category } from "../../../../data/category";
import type { User } from "../../../../data/user";
import TagList from "../../../elements/tag-list";

interface CategoryTaskTitleProps {
  user: User;
  category: Category;
  input: string;
  setInput: (value: string) => void;
}

function CategoryTaskTitle(ctx: CategoryTaskTitleProps) {
  return (
    <div className="flex justify-between w-full pt-4 text-xl gap-10">
      <input
        value={ctx.input}
        onChange={(e) => ctx.setInput(e.target.value)}
        placeholder="New Task"
        className="font-medium self-start bg-background-100 rounded-md p-2 shadow"
      />
      <div className="flex flex-col space-y-1 gap-1">
        <TagList title={"Category"} tag={ctx.category.title} />
        <TagList title={"Assignees"} tag={ctx.user.name} />
      </div>
    </div>
  );
}

export default CategoryTaskTitle;
