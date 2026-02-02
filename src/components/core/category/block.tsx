import { Edit, Pen, PenIcon } from "lucide-react";
import type { Category } from "../../../data/category";
import type { Task, OnTaskCreate } from "../../../data/task";
import type { User } from "../../../data/user";
import TaskCreateModal from "../task/add-entry";
import TaskEntry from "../task/entry";
import CategoryTitle from "./title";
import { useState } from "react";
import { archive_id } from "../../../hooks/useCategory";

interface CategoryBlockContext {
  entries: Task[];
  category: Category;
  currentUser: User;
  updateCategoryTitle: (title: string, id: number) => void;
  onTaskCreate: OnTaskCreate;
}

interface HeaderContext {
  category: Category;
  updateCategoryTitle: (title: string, id: number) => void;
}

function Header(ctx: HeaderContext) {
  const [editFlag, setEditFlag] = useState(false);

  function _toggleEditFlag() {
    setEditFlag(!editFlag);
  }



  return (
    <div className="flex justify-between">
      <CategoryTitle
        category={ctx.category}
        updateTitle={ctx.updateCategoryTitle}
        editFlag={editFlag}
      />
      {ctx.category.id !== archive_id && (
        <button onClick={() => _toggleEditFlag()}>
          <Edit
            size={15}
            className={
              editFlag
                ? "text-text-950 hover:text-text-600"
                : "text-text-600 hover:text-text-950"
            }
          />
        </button>
      )}
    </div>
  );
}

function CategoryBlock(ctx: CategoryBlockContext) {
  return (
    <div className="p-2 space-y-2 w-100 bg-background-200 rounded-md max-h-fit">
      <div className="p-2 space-y-2">
        <Header
          category={ctx.category}
          updateCategoryTitle={ctx.updateCategoryTitle}
        />

        {ctx.entries.map((task) => (
          <div key={task.id}>
            <TaskEntry key={task.id} task={task} />
          </div>
        ))}
      </div>
      <TaskCreateModal
        category={ctx.category}
        onTaskCreate={ctx.onTaskCreate}
        user={ctx.currentUser}
      />
    </div>
  );
}

export default CategoryBlock;
