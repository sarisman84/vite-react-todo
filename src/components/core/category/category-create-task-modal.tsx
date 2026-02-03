import { useState } from "react";
import type { Category } from "../../../data/category";
import type { User } from "../../../data/user";
import type { AppData } from "../../../data/app";
import WizardModal from "../../elements/wizard-modal";
import CategorySubmitButton from "./modal/category-task-submit-button";
import CategoryTaskTitle from "./modal/category-task-title";
import CategoryTaskDescription from "./modal/category-task-description";

interface CategoryCreateTaskModal {
  user: User;
  category: Category;
  root: AppData;
  openFlag: boolean;
  setOpenFlag: (value: boolean) => void;
}

function CategoryCreateTaskModal(ctx: CategoryCreateTaskModal) {
  const [titleInput, setTitleInput] = useState("");
  const [descInput, setDescInput] = useState("");

  function _handleSubmission() {
    if (!titleInput.trim()) {
      return;
    }

    ctx.root.events.task.onTaskCreated(
      ctx.user.id,
      ctx.category.id,
      titleInput,
      descInput,
    );
    setTitleInput("");
    setDescInput("");
    ctx.setOpenFlag(false);
  }

  return (
    <>
      <WizardModal openFlag={ctx.openFlag} setOpenFlag={ctx.setOpenFlag}>
        <div className="flex flex-col gap-4 w-full">
          <CategoryTaskTitle
            category={ctx.category}
            user={ctx.user}
            input={titleInput}
            setInput={setTitleInput}
          />
          <CategoryTaskDescription input={descInput} setInput={setDescInput} />
          <CategorySubmitButton handleSubmit={_handleSubmission} />
        </div>
      </WizardModal>
    </>
  );
}

export default CategoryCreateTaskModal;
