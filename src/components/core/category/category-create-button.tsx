import { Plus } from "lucide-react";
import type { OnCategoryCreated } from "../../../data/category";

interface CategoryCreateButtonProps {
  createCategory: OnCategoryCreated;
}

function CategoryCreateButton(ctx: CategoryCreateButtonProps) {
  function _createNewCategory() {
    ctx.createCategory("New Category");
  }
  return (
    <div className="flex max-h-10 p-4 items-center bg-accent-50 rounded-md  shadow hover:bg-accent-100">
      <Plus size={20} className="" />
      <button onClick={() => _createNewCategory()}>Add New Category</button>
    </div>
  );
}

export default CategoryCreateButton;
