import { useEffect, useState } from "react";
import type { Category, CategoryEvents } from "../data/category";

export const archive_id: number = -1;

const category_id: string = "categories";
const empty_array: string = "[]";

function useCategory(): [Category[], CategoryEvents] {
  const [categories, setCategories] = useState(_tryLoadingStoredCategories());
  useEffect(() => {
    localStorage.setItem(category_id, JSON.stringify(categories));
  }, [categories]);

  function _tryLoadingStoredCategories(): Category[] {
    const savedCategories: Category[] = JSON.parse(
      localStorage.getItem(category_id) || empty_array,
    );

    return savedCategories;
  }

  function _tryCreatingArchive() {
    const result = categories.findIndex((item) => {
      return item.id === archive_id;
    });

    // Archive exists, exiting
    if (result !== -1) {
      return;
    }

    onCategoryCreated("Archive", archive_id);
  }

  function onCategoryCreated(title: string, id: number = 0) {
    setCategories((prevArray) => [
      {
        id: id === 0 ? Date.now() : id,
        title,
        order: prevArray.length,
      },
      ...prevArray,
    ]);
  }

  function onCategoryRemoved(id: number) {
    setCategories((prevArray) => prevArray.filter((item) => item.id !== id));
  }

  function onCategoryTitleUpdated(title: string, id: number) {
    setCategories((prevArray) =>
      prevArray.map((category) => {
        category.title = category.id === id ? title : category.title;
        return category;
      }),
    );
  }

  _tryCreatingArchive();

  const events: CategoryEvents = {
    onCategoryRemoved,
    onCategoryCreated,
    onCategoryTitleUpdated,
  };

  return [categories, events];
}

export default useCategory;
