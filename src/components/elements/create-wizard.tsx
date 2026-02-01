import { DialogBackdrop, Dialog, DialogPanel } from "@headlessui/react";
import { Plus } from "lucide-react";
import React from "react";
import { useState } from "react";

interface CreateWizardContext extends React.PropsWithChildren {
  title: string;
  open_button_title: string;
  create_button_title: string;
  create_button_callback: () => void;
}

function WizardModal(ctx: CreateWizardContext) {
  const [wizardState, setWizardState] = useState(false);

  return (
    <>
      <div>
        <div className="flex justify-center gap-1 px-2 pb-2">
          <button
            onClick={() => setWizardState(true)}
            className="flex items-center gap-2 rounded-md p-1 hover:bg-accent-100 grow px-2"
          >
            <Plus size={20} className="text-gray-500 items-center w-4" />
            <label className="grow text-center text-gray-500">
              {ctx.open_button_title}
            </label>
          </button>
        </div>
      </div>
      <Dialog
        open={wizardState}
        onClose={() => setWizardState(false)}
        className="relative z-50"
      >
        <DialogBackdrop className="fixed inset-0 bg-background-400/30" />
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
          <DialogPanel className="flex w-2xl min-h-75 bg-background-50 rounded-md px-7 pb-5 space-y-4 self-center justify-center shadow">
            <div className="flex flex-col gap-1 self-center w-full">
              {React.Children.count(ctx.children) > 0 && ctx.children}
              {React.Children.count(ctx.children) === 0 && (
                <div className="flex flex-col p-8">
                  <div className="flex grow h-30 justify-center p-8 bg-background rounded-md">
                    <p className="self-center text-text">
                      Body not implemented
                    </p>
                  </div>
                </div>
              )}
              <div className="flex grow justify-start pt-4">
                <button
                  onClick={() => {
                    ctx.create_button_callback();
                    setWizardState(false);
                  }}
                  className="items-center p-2 bg-accent-100 rounded-md text-text-800 shadow font-bold"
                >
                  {ctx.create_button_title}
                </button>
              </div>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
}

export default WizardModal;
