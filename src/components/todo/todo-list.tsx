import { useState } from "react";
import type { Todo } from "../../data/todos";
import TodoCreateDialog from "../create-todo-dialog";
import TodoEntry from "./todo-items";

interface TodoListArgs {
  entries: Todo[];
  onItemUpdated: (id: number, completed: boolean) => void;
  onItemDeleted: (id: number) => void;
  onCreateItem: (title: string) => void;
}

function TodoList({
  entries,
  onItemUpdated,
  onItemDeleted,
  onCreateItem,
}: TodoListArgs) {
  const entriesSorted = entries.sort((a, b) => {
    if (a.completed === b.completed) {
      return b.id - a.id;
    }
    return a.completed ? 1 : -1;
  });

  return (
    <>
      <div className="space-y-4">
        {entriesSorted.map((entry) => (
          <p key={entry.id}>
            <TodoEntry
              key={entry.id}
              item={entry}
              itemUpdated={onItemUpdated}
              itemDeleted={onItemDeleted}
            />
          </p>
        ))}
        <TodoCreateDialog
          createItem={onCreateItem}
        />
      </div>
      {entries.length === 0 && (
        <p className="text-center text-sm text-gray-500">
          No tasks listed. Add a new one above.
        </p>
      )}
    </>
  );
}

export default TodoList;
