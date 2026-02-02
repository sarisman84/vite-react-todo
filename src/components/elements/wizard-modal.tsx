import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import React from "react";

interface WizardModalProps extends React.PropsWithChildren {
  openFlag: boolean;
  setOpenFlag: (value: boolean) => void;
}

interface BodyProps extends React.PropsWithChildren {}

function Body(ctx: BodyProps) {
  return (
    <div className="flex flex-col gap-1 self-center w-full">
      <div className="flex grow justify-center pt-4">
        {React.Children.count(ctx.children) > 0 ? (
          ctx.children
        ) : (
          <div className="flex grow h-30 justify-center p-8 bg-background rounded-md">
            <p className="self-center text-text">Body not implemented</p>
          </div>
        )}
      </div>
    </div>
  );
}

function WizardModal(ctx: WizardModalProps) {
  return (
    <>
      <Dialog
        open={ctx.openFlag || false}
        onClose={() => ctx.setOpenFlag(false)}
        className="relative z-50"
      >
        <DialogBackdrop className="fixed inset-0 bg-background-400/30" />
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
          <DialogPanel className="flex w-2xl min-h-75 bg-background-50 rounded-md px-7 pb-5 space-y-4 self-center justify-center shadow">
            <Body children={ctx.children} />
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
}

/* <div>
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
      </div> */

export default WizardModal;
