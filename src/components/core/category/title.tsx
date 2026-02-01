import { useState } from "react";
import type { Category } from "../../../data/category";
import { archive_id } from "../../../hooks/useCategory";


interface CategoryTitleContext {
  category: Category;
  updateTitle: (title: string, id: number) => void;
}

function CategoryTitle({ category, updateTitle }: CategoryTitleContext) {
  const [input, setInput] = useState(category.title);

  function _updateCategoryTitle(result: React.SubmitEvent<HTMLFormElement>) {
    result.preventDefault();

    if (!input.trim()) {
      return;
    }

    updateTitle(input, category.id);
    setInput(input);
  }

  return (
    <form className="px-1" onSubmit={_updateCategoryTitle}>
      {category.id === archive_id && (
        <label className="text-2xs font-bold">Archive</label>
      )}
      {category.id !== archive_id && (
        <input
          className="text-2xs font-bold"
          onChange={(e) => setInput(e.target.value)}
        />
      )}
    </form>
  );
}

export default CategoryTitle;
