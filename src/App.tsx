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
    <main>
      <div className="p-2">
        {catData.categories.map((category) => (
          <CategoryBlock
            entries={_getTasksByCategory(taskData.entries, category.id)}
          />
        ))}
      </div>
    </main>
  );
}

export default App;
