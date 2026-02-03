export type OnCategoryCreated = (title: string) => void;
export type OnCategoryRemoved = (id: number) => void;
export type OnCategoryTitleUpdated = (title: string, id: number) => void;

export type CategoryEvents = {
  onCategoryRemoved: OnCategoryRemoved;
  onCategoryCreated: OnCategoryCreated;
  onCategoryTitleUpdated: OnCategoryTitleUpdated;
};

export interface Category {
  id: number;
  title: string;
  order: number;
  modifiable: boolean;
}
