import useTask from "./hooks/useTask";
import useCategory from "./hooks/useCategory";
import useUser from "./hooks/useUser";
import CategoryBlock from "./components/core/category/category-block";
import CategoryCreateButton from "./components/core/category/category-create-button";
import { empty_task, type Task } from "./data/task";
import { useState } from "react";
import { archive_category, type Category } from "./data/category";
import TaskModal from "./components/core/task/task-modal";
import { ModalEditMode } from "./data/task-modal/modal-edit-mode";
import { Root } from "./data/context/root";
import type { RootContext } from "./data/context/root";
import { Runtime, type RuntimeContext } from "./data/context/runtime";

function App() {
  const [tasks, taskEvents] = useTask();
  const [categories, categoryEvents] = useCategory();
  const [users, userEvents] = useUser();

  const [modalOpenFlag, setModalOpenFlag] = useState(false);
  const [modalEditMode, setModalEditMode] = useState(ModalEditMode.View);

  const [targetTask, setTargetTask] = useState<Task>(empty_task);
  const [targetCategory, setTargetCategory] =
    useState<Category>(archive_category);

  const runtimeContext: RuntimeContext = {
    targetTaskState: [targetTask, setTargetTask],
    targetCategoryState: [targetCategory, setTargetCategory],
    modalOpenState: [modalOpenFlag, setModalOpenFlag],
    modalEditModeState: [modalEditMode, setModalEditMode],
  };

  const rootContext: RootContext = {
    tasks,
    categories,
    users,
    taskEvents,
    categoryEvents,
    userEvents,
  };

  return (
    <Root.Provider value={rootContext}>
      <main className="py-5 h-screen space-y-5 overflow-y-auto bg-background-300">
        <h1 className="px-10 font-bold text-4xl text-left text-text-900">
          Spyro's Trello Board
        </h1>
        <Runtime.Provider value={runtimeContext}>
          <div className="flex px-10 gap-4">
            {categories.map((category) => (
              <CategoryBlock key={category.id} category={category} />
            ))}
            <CategoryCreateButton />
          </div>
          <TaskModal/>
        </Runtime.Provider>
      </main>
    </Root.Provider>
  );
}

export default App;
