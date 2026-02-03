import { useEffect, useState } from "react";
import {
  archiveExampleTasks,
  type Metadata,
  type Task,
  type TaskEvents,
} from "../data/task";
import { archive_category } from "../data/category";


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

  function createTask(
    assignedUserIds: number[],
    categoryId: number,
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
      categoryId: categoryId,
      assignedUserIds: assignedUserIds,
      metadata,
    };

    setData((prevEntries) => [task, ...prevEntries]);
    return task;
  }

  function updateTask(
    id: number,
    title: string,
    description: string,
    assignedUsers: number[],
  ) {
    setData((prevEntries) =>
      prevEntries.map((task) => {
        if (task.id !== id) {
          return task;
        }
        const metadata: Metadata = {
          title,
          description,
          completed: task.metadata.completed,
          completion_date: task.metadata.completion_date,
        };
        return {
          ...task,
          metadata,
          assignedUserIds: assignedUsers,
        };
      }),
    );

    console.log('[Task/Update]: Updated task_%d', id);
  }

  function deleteTask(id: number) {
    setData((prevEntries) => prevEntries.filter((item) => item.id !== id));
  }

  function moveTask(id: number, target_category: number) {
    setData((prevEntries) =>
      prevEntries.map((item) => {
        item.categoryId = item.id === id ? target_category : item.categoryId;
        return item;
      }),
    );
  }

  function archiveTask(id: number) {
    moveTask(id, archive_category.id);
  }
  const events: TaskEvents = {
    archiveTask,
    moveTask,
    deleteTask,
    createTask,
    updateTask,
  };

  return [entries, events];
}

export default useTask;
