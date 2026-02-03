import { useState } from "react";
import type { Category } from "../../../data/category";

interface CategoryTitleProps {
  category: Category;
  updateTitle: (title: string, id: number) => void;
}

function CategoryTitle(ctx: CategoryTitleProps) {
  const [input, setInput] = useState("");

  function _updateCategoryTitle(_: FormData) {
    if (!input.trim()) {
      return;
    }

    ctx.updateTitle(input, ctx.category.id);
    setInput(input);
  }
  return (
    <>
      <form className="px-2" action={_updateCategoryTitle}>
        <input
          value={input}
          className="text-2xs font-bold text-text-900"
          onChange={(e) => setInput(e.target.value)}
          placeholder={ctx.category.title}
        />
      </form>
    </>
  );
}

export default CategoryTitle;
