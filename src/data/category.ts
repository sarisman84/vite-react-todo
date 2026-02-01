export type OnCreateCategory = (title : string) => void;

export interface Category {
  id: number;
  title: string;
  order: number;
}
