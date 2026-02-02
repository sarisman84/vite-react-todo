
import useTask from "./hooks/useTask";
import useCategory from "./hooks/useCategory";
import type { Task } from "./data/task";
import useUser from "./hooks/useUser";
import CategoryBlock from "./components/core/category/block";
import CategoryAddEntry from "./components/core/category/add-category";

function _getTasksByCategory(tasks: Task[], id: number) {
  return tasks.filter((task) => task.category_id === id);
}

function App() {
  const taskData = useTask();
  const catData = useCategory();
  const userData = useUser();

  return (
    <main className="py-5 h-screen space-y-5 overflow-y-auto bg-background-300">
      <h1 className="px-10 font-bold text-4xl text-left text-text-900">
        Spyro's Trello Board
      </h1>
      <div className="flex px-10 gap-4">
        {catData.categories.map((category) => (
          <CategoryBlock
            key={category.id}
            entries={_getTasksByCategory(taskData.entries, category.id)}
            category={category}
            updateCategoryTitle={catData.updateCategoryTitle}
            onTaskCreate={taskData.createItem}
            onTaskRemove={taskData.removeItem}
            currentUser={userData.users[0]}
            users={userData.users}
          />
        ))}
        <CategoryAddEntry createCategory={catData.createCategory}/>
      </div>
    </main>
  );
}

export default App;
