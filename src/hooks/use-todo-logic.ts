import { useEffect, useState } from "react";
import type { Todo } from "../data/todos";

function useTodoLogic() {
  const [entries, setData] = useState(() => {
    const savedEntries: Todo[] = JSON.parse(
      localStorage.getItem("todo-entries") || "[]",
    );
    return savedEntries;
  });

  useEffect(() => {
    localStorage.setItem("todo-entries", JSON.stringify(entries));
  }, [entries]);

  function onItemUpdated(id: number, completed: boolean) {
    setData((prevEntries) =>
      prevEntries.map((item) =>
        item.id === id ? { ...item, completed } : item,
      ),
    );
  }

  function createItem(title: string) {
    setData((prevEntries) => [
      {
        id: Date.now(), //Fixes an issue with unique identifiers
        title,
        completed: false,
      },
      ...prevEntries,
    ]);
  }

  function removeItem(id: number) {
    setData((prevEntries) => prevEntries.filter((item) => item.id !== id));
  }

  function removeAllCompletedItems() {
    setData((prevEntries) => prevEntries.filter((item) => !item.completed));
  }

  return {
     entries,
     onItemUpdated,
     createItem,
     removeItem,
     removeAllCompletedItems
  }
}

export default useTodoLogic;
