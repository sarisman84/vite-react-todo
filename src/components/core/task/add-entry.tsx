import type { OnTaskCreate } from "../../../data/task";
import { useState } from "react";
import type { Category } from "../../../data/category";
import type { User } from "../../../data/user";
import TagList from "../../elements/tag-list";
import WizardModal from "../../elements/create-wizard";

const title_input: number = 0;
const desc_input: number = 1;
const empty_inputs: string[] = ["", ""];

interface TaskAddEntryContext {
  user: User;
  category: Category;
  onTaskCreate: OnTaskCreate;
}

function TaskAddEntry(ctx: TaskAddEntryContext) {
  const [inputs, setInputs] = useState<string[]>(empty_inputs);

  function _updateInput(input_id: number, value: string) {
    setInputs((prevArray) =>
      prevArray.map((input, indx) => {
        input = indx === input_id ? value : input;
        return input;
      }),
    );
  }

  function _resetInputs() {
    setInputs(empty_inputs);
  }

  function _handleSubmission() {
    const title = inputs[title_input];
    const desc = inputs[desc_input];

    if (!title.trim()) {
      return;
    }

    ctx.onTaskCreate(0, ctx.category.id, title, desc);
    _resetInputs();
  }

  const tag_category: string = "Category";

  return (
    <>
      <WizardModal
        title="New Task"
        open_button_title="Add Task"
        create_button_title="Create Task"
        create_button_callback={_handleSubmission}
      >
        <div className="flex flex-col gap-4">
          <div className="flex justify-between w-full pt-4 text-2xl">
            <input
              value={inputs[title_input]}
              onChange={(e) => _updateInput(title_input, e.target.value)}
              placeholder="New Task"
              className="font-medium self-start"
            />
            <div className="flex flex-col space-y-1">
              <TagList title={"Category"} tag={ctx.category.title} />
              <TagList title={"Assignees"} tag={ctx.user.name} />
            </div>
          </div>

          <p className="text-slate-500 font-bold h-3">Description</p>
          <form className="flex gap-2 items-center grow">
            <textarea
              value={inputs[desc_input]}
              onChange={(e) => _updateInput(desc_input, e.target.value)}
              placeholder="Example"
              className="flex rounded-md grow bg-white p-2 w-auto overflow-y-auto pb-20"
            />
          </form>
        </div>
      </WizardModal>
      {/* <Dialog
        open={dialogOpenState}
        onClose={() => setDialogOpenState(false)}
        className="relative z-50"
      >
        <DialogBackdrop className="fixed inset-0 bg-black/30" />
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
          <DialogPanel className="w-2xl bg-slate-200 rounded-md px-7 pb-5 space-y-4">
            <div className="flex justify-between w-full pt-4 text-2xl">
              <input
                value={inputs[title_input]}
                onChange={(e) => _updateInput(title_input, e.target.value)}
                placeholder="New Task"
                className="font-medium self-start"
              />
              <div className="flex flex-col space-y-1">
                <TagList title={"Category"} tag={ctx.category.title} />
                <TagList title={"Assignees"} tag={ctx.user.name} />
              </div>
            </div>

            <p className="text-slate-500 font-bold h-3">Description</p>
            <form className="flex gap-2 items-center grow">
              <textarea
                value={inputs[desc_input]}
                onChange={(e) => _updateInput(desc_input, e.target.value)}
                placeholder="Example"
                className="flex rounded-md grow bg-white p-2 w-auto overflow-y-auto pb-20"
              />
            </form>
            <div className="flex grow justify-center">
              <button
                onClick={() => _handleSubmission()}
                className="items-center p-2 bg-white rounded-md text-slate-500"
              >
                Create Task
              </button>
            </div>
          </DialogPanel>
        </div>
      </Dialog> */}
    </>
  );
}

export default TaskAddEntry;
