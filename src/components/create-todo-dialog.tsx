import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from "@headlessui/react";
import { Plus } from "lucide-react";
import { useState } from "react";

interface TodoCreateDialogArgs {
  createItem: (title: string) => void;
}

function TodoCreateDialog({ createItem }: TodoCreateDialogArgs) {
  const [input, setInput] = useState("");
  const [isOpen, setOpenFlag] = useState(false);

  function handleSubmit(result: React.SubmitEvent<HTMLFormElement>) {
    result.preventDefault();

    //If input is empty, exit
    if (!input.trim()) {
      return;
    }

    createItem(input);
    setInput("");
    setOpenFlag(false);
  }

  return (
    <>
      <div className="p-2">
        <div className="flex items-center gap-1">
          <button
            onClick={() => setOpenFlag(true)}
            className="flex items-center gap-2 border rounded-md p-2 border-white bg-gray-50 hover:bg-slate-200 hover:border-slate-200 grow"
          >
            <Plus
              size={20}
              className="flex text-gray-500 hover:text-slate-900 items-center grow"
            />
          </button>
        </div>

        <Dialog
          open={isOpen}
          onClose={() => setOpenFlag(false)}
          className="relative z-50"
        >
          <DialogBackdrop className="fixed inset-0 bg-black/30" />
          <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
            <DialogPanel className="max-w-lg space-y-4 border bg-white p-12">
              <DialogTitle className="font-bold">Create new task</DialogTitle>
              <form className="flex" onSubmit={handleSubmit}>
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="What needs to be done?"
                  className="rounded-s-md grow border border-slate-100 bg-white p-2"
                />
                <button
                  type="submit"
                  className="w-16 rounded-e-md bg-slate-900 text-white hover:bg-slate-800"
                >
                  Add
                </button>
              </form>
            </DialogPanel>
          </div>
        </Dialog>
      </div>
    </>
  );
}

export default TodoCreateDialog;
