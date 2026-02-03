
export type OnCategoryCreated = (title: string) => void;
export type OnCategoryRemoved = (id: number) => void;
export type OnCategoryTitleUpdated = (title: string, id: number) => void;

export type CategoryEvents = {
  deleteCategory: OnCategoryRemoved;
  createCategory: OnCategoryCreated;
  updateCategory: OnCategoryTitleUpdated;
};

export interface Category {
  id: number;
  title: string;
  order: number;
  modifiable: boolean;
}

export const archive_category : Category = {
  id: -99,
  title: "Archive",
  order: 0,
  modifiable: false,
}
