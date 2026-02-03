import useTask from "./hooks/useTask";
import useCategory from "./hooks/useCategory";
import useUser from "./hooks/useUser";
import CategoryBlock from "./components/core/category/category-block";
import CategoryCreateButton from "./components/core/category/category-create-button";
import type { AppData } from "./data/app";
import { defaultUser } from "./data/user";

function App() {
  const taskData = useTask();
  const catData = useCategory();
  const userData = useUser();

  const root: AppData = {
    data: {
      tasks: taskData[0],
      users: userData[0],
      categories: catData[0],
    },

    events: {
      task: taskData[1],
      user: userData[1],
      category: catData[1],
    },

    runtime: {
      currentUser: defaultUser,
    },
  };

  return (
    <main className="py-5 h-screen space-y-5 overflow-y-auto bg-background-300">
      <h1 className="px-10 font-bold text-4xl text-left text-text-900">
        Spyro's Trello Board
      </h1>
      <div className="flex px-10 gap-4">
        {root.data.categories.map((category) => (
          <CategoryBlock key={category.id} category={category} root={root} />
        ))}
        <CategoryCreateButton
          createCategory={root.events.category.onCategoryCreated}
        />
      </div>
    </main>
  );
}

export default App;
