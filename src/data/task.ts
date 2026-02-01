export interface Task {
  id: number;
  category_id: number;
  owner_id: number[];
  metadata: Metadata;
}

export interface Metadata {
  title: string;
  description: string;
  completed: boolean;
  completion_date: Date;
}

