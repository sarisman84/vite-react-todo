import { useState } from "react";
import type { Category } from "../../../data/category";
import { archive_id } from "../../../hooks/useCategory";

interface CategoryTitleContext {
  category: Category;
  editFlag: boolean;
  updateTitle: (title: string, id: number) => void;
}

interface TitleContext {
  category: Category;
}

interface EditableTitleContext {
  category: Category;
  updateTitle: (title: string, id: number) => void;
}

function Title(ctx: TitleContext) {
  return (
    <label className="text-2xs font-bold text-text-700">
      {ctx.category.title}
    </label>
  );
}

function EditableTitle(ctx: EditableTitleContext) {
  const [input, setInput] = useState("");

  function _updateCategoryTitle(_: FormData) {
    if (!input.trim()) {
      return;
    }

    ctx.updateTitle(input, ctx.category.id);
    setInput(input);
  }

  return (
    <form className="px-1" action={_updateCategoryTitle}>
      <input
        value={input}
        className="text-2xs font-bold text-text-950"
        onChange={(e) => setInput(e.target.value)}
        placeholder={ctx.category.title}
      />
    </form>
  );
}

function CategoryTitle(ctx: CategoryTitleContext) {
  return (
    <>
      {ctx.editFlag ? (
        <EditableTitle category={ctx.category} updateTitle={ctx.updateTitle} />
      ) : (
        <Title category={ctx.category} />
      )}
    </>
  );
}

export default CategoryTitle;
