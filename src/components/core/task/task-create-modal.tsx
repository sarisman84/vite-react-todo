import { Plus } from "lucide-react";
import { useState } from "react";
import type { Category } from "../../../data/category";
import type { OnTaskCreate } from "../../../data/task";
import type { User } from "../../../data/user";
import TagList from "../../elements/tag-list";
import WizardModal from "../../elements/WizardModal/wizard-modal";

interface TaskCreateModalContext {
  user: User;
  category: Category;
  onTaskCreate: OnTaskCreate;
}

interface AddTaskButtonContext {
  setOpenFlag: (value: boolean) => void;
}

interface TaskSectionContext {
  user: User;
  category: Category;
  input: string;
  setInput: (value: string) => void;
}

interface DescriptionContext {
  input: string;
  setInput: (value: string) => void;
}

interface SubmitButtonContext {
  handleSubmit: () => void;
}

function AddTaskButton(ctx: AddTaskButtonContext) {
  return (
    <div className="flex justify-center gap-1 px-2 pb-2">
      <button
        onClick={() => ctx.setOpenFlag(true)}
        className="flex items-center gap-2 rounded-md p-1 hover:bg-accent-100 grow px-2"
      >
        <Plus size={20} className="text-text-900 items-center w-4" />
        <label className="grow text-center text-text-900">Add New Task</label>
      </button>
    </div>
  );
}

function NewTask(ctx: TaskSectionContext) {
  return (
    <div className="flex justify-between w-full pt-4 text-xl gap-10">
      <input
        value={ctx.input}
        onChange={(e) => ctx.setInput(e.target.value)}
        placeholder="New Task"
        className="font-medium self-start bg-background-100 rounded-md p-2 shadow"
      />
      <div className="flex flex-col space-y-1 gap-1">
        <TagList title={"Category"} tag={ctx.category.title} />
        <TagList title={"Assignees"} tag={ctx.user.name} />
      </div>
    </div>
  );
}

function Description(ctx: DescriptionContext) {
  return (
    <>
      <p className="text-text font-bold h-3">Description</p>
      <form className="flex gap-2 items-center grow">
        <textarea
          value={ctx.input}
          onChange={(e) => ctx.setInput(e.target.value)}
          placeholder="Example"
          className="flex rounded-md grow bg-background-100 p-2 w-auto overflow-y-auto pb-20 shadow"
        />
      </form>
    </>
  );
}

function SubmitButton(ctx: SubmitButtonContext) {
  return (
    <div className="flex justify-center">
      <button
        onClick={ctx.handleSubmit}
        className="p-2 bg-accent-200 hover:bg-accent-400 rounded-md inline-flex justify-center"
      >
        <label className="text-text-900">Create Task</label>
      </button>
    </div>
  );
}

function TaskCreateModal(ctx: TaskCreateModalContext) {
  const [titleInput, setTitleInput] = useState("");
  const [descInput, setDescInput] = useState("");
  const [openFlag, setOpenFlag] = useState<boolean>(false);

  function _handleSubmission() {
    if (!titleInput.trim()) {
      return;
    }

    ctx.onTaskCreate(ctx.user.id, ctx.category.id, titleInput, descInput);
    setTitleInput("");
    setDescInput("");
    setOpenFlag(false);
  }

  return (
    <>
      <AddTaskButton setOpenFlag={setOpenFlag} />
      <WizardModal openFlag={openFlag} setOpenFlag={setOpenFlag}>
        <div className="flex flex-col gap-4 w-full">
          <NewTask
            category={ctx.category}
            user={ctx.user}
            input={titleInput}
            setInput={setTitleInput}
          />
          <Description input={descInput} setInput={setDescInput} />
          <SubmitButton handleSubmit={_handleSubmission} />
        </div>
      </WizardModal>
    </>
  );
}

export default TaskCreateModal;
