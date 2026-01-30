import type { Todo } from "../data/todos";
import TodoEntry from "./todo-items";

interface TodoListArgs {
  entries: Todo[];
  onItemUpdated: (id: number, completed: boolean) => void;
  onItemDeleted: (id: number) => void;
}

function TodoList({ entries, onItemUpdated, onItemDeleted }: TodoListArgs) {
  const entriesSorted = entries.sort((a, b) => {
    if (a.completed === b.completed) {
      return b.id - a.id;
    }
    return a.completed ? 1 : -1;
  });

  return (
    <>
      <div className="space-y-2">
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
