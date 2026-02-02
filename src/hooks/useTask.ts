import { useEffect, useState } from "react";
import {
  archiveExampleTasks,
  type Metadata,
  type Task,
  type TaskEvents,
} from "../data/task";
import { archive_id } from "./useCategory";

const task_id: string = "tasks";
const empty_array: string = "[]";

function _tryLoadingTasks(): Task[] {
  let savedEntries: Task[] = JSON.parse(
    localStorage.getItem(task_id) || empty_array,
  );
  if (savedEntries.length === 0) {
    savedEntries = [...archiveExampleTasks];
  }
  return savedEntries;
}

function useTask(): [Task[], TaskEvents] {
  const [entries, setData] = useState(_tryLoadingTasks());

  useEffect(() => {
    localStorage.setItem(task_id, JSON.stringify(entries));
  }, [entries]);

  function onItemUpdated(id: number, completed: boolean) {
    setData((prevEntries) =>
      prevEntries.map((item) =>
        item.id === id ? { ...item, completed } : item,
      ),
    );
  }

  function onTaskCreated(
    owner_id: number,
    category_id: number,
    title: string,
    description: string,
  ) {
    const metadata: Metadata = {
      title,
      description,
      completed: false,
      completion_date: Date.now(),
    };

    const task: Task = {
      id: Date.now(),
      category_id,
      owner_id: [owner_id],
      metadata,
    };

    setData((prevEntries) => [task, ...prevEntries]);
  }

  function onTaskRemoved(id: number) {
    setData((prevEntries) => prevEntries.filter((item) => item.id !== id));
  }

  function onTaskMoved(id: number, target_category: number) {
    setData((prevEntries) =>
      prevEntries.map((item) => {
        item.category_id = item.id === id ? target_category : item.category_id;
        return item;
      }),
    );
  }

  function onTaskArchived(id: number) {
    onTaskMoved(id, archive_id);
  }
  const events: TaskEvents = {
    onTaskArchived,
    onTaskMoved,
    onTaskRemoved,
    onTaskCreated,
  };
  
  return [entries, events];
}

export default useTask;
