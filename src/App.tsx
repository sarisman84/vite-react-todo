import AddTodoForm from "./components/add-todo-form";
import TodoList from "./components/todo/todo-list";
import TodoSummary from "./components/todo/todo-summary";
import useTodoLogic from "./hooks/use-todo-logic";

function App() {
  const {
    entries,
    createItem,
    onItemUpdated,
    removeItem,
    removeAllCompletedItems,
  } = useTodoLogic();

  return (
    <main className="py-10 h-screen space-y-5 overflow-y-auto">
      <h1 className="font-bold text-4xl text-center">Your Todo</h1>
      <div className="max-w-lg mx-auto bg-slate-100 rounded-md p-5">
        <TodoList
          entries={entries}
          onItemUpdated={onItemUpdated}
          onItemDeleted={removeItem}
          onCreateItem={createItem}
        />
      </div>
      <TodoSummary
        entries={entries}
        deleteAllCompleted={removeAllCompletedItems}
      />
    </main>
  );
}

export default App;
