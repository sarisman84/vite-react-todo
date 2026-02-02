import { TableOfContents } from "lucide-react";
import type { Category } from "../../../data/category";
import TaskCreateModal from "../task/task-create-modal";
import TaskEntry from "../task/entry";
import CategoryTitle from "./title";
import { useState } from "react";
import ContextMenu from "../../elements/context-menu";
import type { AppData } from "../../../data/app";

interface CategoryBlockProps {
  root: AppData;
  category: Category;
}

interface HeaderProps {
  category: Category;
  updateCategoryTitle: (title: string, id: number) => void;
}

function Header(ctx: HeaderProps) {
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
      {/* {ctx.category.id !== archive_id && (
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
      )} */}
      <ContextMenu
        menuButton={
          <TableOfContents
            size={20}
            className="text-text-600 hover:text-text-900"
          />
        }
      >
        <button className="text-sm">Add Task</button>
        <button className="text-sm">Delete Category</button>
      </ContextMenu>
    </div>
  );
}

function CategoryBlock(ctx: CategoryBlockProps) {
  const filteredTasks = ctx.root.data.tasks.filter(
    (task) => task.category_id === ctx.category.id,
  );

  return (
    <div className="p-2 space-y-2 w-100 bg-background-200 rounded-md max-h-fit">
      <div className="p-2 space-y-2">
        <Header
          category={ctx.category}
          updateCategoryTitle={ctx.root.events.category.onCategoryTitleUpdated}
        />

        {filteredTasks.map((task) => (
          <div key={task.id}>
            <TaskEntry
              key={task.id}
              task={task}
              users={ctx.root.data.users}
              deleteTask={ctx.root.events.task.onTaskRemoved}
            />
          </div>
        ))}
      </div>
      <TaskCreateModal
        category={ctx.category}
        user={ctx.root.runtime.currentUser}
        root={ctx.root}
      />
    </div>
  );
}

export default CategoryBlock;
