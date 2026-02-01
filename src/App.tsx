import CategoryBlock from "./components/category/block";
import useTask from "./hooks/useTask";
import useCategory from "./hooks/useCategory";
import type { Task } from "./data/task";
import useUser from "./hooks/useUser";

function _getTasksByCategory(tasks: Task[], id: number) {
  return tasks.filter((task) => task.category_id === id);
}

function App() {
  const taskData = useTask();
  const catData = useCategory();
  const userData = useUser();

  return (
    <main className="py-5 h-screen space-y-5 overflow-y-auto bg-slate-500">
      <h1 className="px-10 font-bold text-4xl text-left text-slate-100">
        Spyro's Trello Board
      </h1>
      <div className="px-10">
        {catData.categories.map((category) => (
          <CategoryBlock
            key={category.id}
            entries={_getTasksByCategory(taskData.entries, category.id)}
            category={category}
          />
        ))}
      </div>
    </main>
  );
}

export default App;
