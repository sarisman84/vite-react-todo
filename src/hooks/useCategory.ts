import { useEffect, useState } from "react";
import type { Category } from "../data/category";

export const archive_id: number = -1;
export type OnCategoryRemoved = (id: number) => void;

const category_id: string = "categories";
const empty_array: string = "[]";

function useCategory() {
  const [categories, setCategories] = useState(_tryLoadingStoredCategories());
  useEffect(() => {
    localStorage.setItem(empty_array, JSON.stringify(categories));
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

    createCategory("Archive", archive_id);
  }

  function createCategory(title: string, id: number = 0) {
    setCategories((prevArray) => [
      {
        id: id === 0 ? Date.now() : id,
        title,
        order: prevArray.length,
      },
      ...prevArray,
    ]);
  }

  function removeCategory(
    id: number,
    onCategoryRemoved: OnCategoryRemoved = (_) => {},
  ) {
    setCategories((prevArray) => prevArray.filter((item) => item.id !== id));
    onCategoryRemoved(id);
  }

  _tryCreatingArchive();

  return {
    categories,
    createCategory,
    removeCategory,
  };
}

export default useCategory;
