import { useEffect, useState } from "react";
import { archiveExampleTasks, type Metadata, type Task } from "../data/task";
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

function useTask() {
  const [entries, setData] = useState(_tryLoadingTasks());

  useEffect(() => {
    localStorage.setItem(empty_array, JSON.stringify(entries));
  }, [entries]);

  function onItemUpdated(id: number, completed: boolean) {
    setData((prevEntries) =>
      prevEntries.map((item) =>
        item.id === id ? { ...item, completed } : item,
      ),
    );
  }

  function createItem(
    title: string,
    description: string,
    owner_id: number[],
    category_id: number,
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
      owner_id,
      metadata,
    };

    setData((prevEntries) => [task, ...prevEntries]);
  }

  function removeItem(id: number) {
    setData((prevEntries) => prevEntries.filter((item) => item.id !== id));
  }

  function moveItem(id: number, target_category: number) {
    setData((prevEntries) =>
      prevEntries.map((item) => {
        item.category_id = item.id === id ? target_category : item.category_id;
        return item;
      }),
    );
  }

  function archiveItem(id: number) {
    moveItem(id, archive_id);
  }

  return {
    entries,
    onItemUpdated,
    createItem,
    removeItem,
    moveItem,
    archiveItem,
  };
}

export default useTask;
