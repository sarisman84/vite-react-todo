import { useContext, useState } from "react";
import { type Task } from "../../../data/task";
import WizardModal from "../../elements/wizard-modal";
import type { Category } from "../../../data/category";
import { Title } from "./task-modal/title";
import EditButton from "./task-modal/edit-button";
import SubmitButton from "./task-modal/submit-button";
import UserTags from "./task-modal/user-tags";
import Description from "./task-modal/description";
import { ModalEditMode } from "../../../data/task-modal/modal-edit-mode";
import { Runtime } from "../../../data/context/runtime";

function TaskModal() {
  const {
    targetTaskState,
    targetCategoryState,
    modalEditModeState,
    modalOpenState,
  } = useContext(Runtime);

  const [modalEditMode, setModalEditMode] = modalEditModeState;
  const [openFlag, setOpenFlag] = modalOpenState;

  return (
    <>
      <WizardModal openFlag={openFlag} setOpenFlag={setOpenFlag}>
        <div className="flex flex-col gap-4 w-full h-full justify-between">
          <div className="flex justify-between">
            <Title taskState={targetTaskState} />
            <div className="flex gap-1">
              <UserTags taskState={targetTaskState} />
              <EditButton setModalEditMode={setModalEditMode} />
            </div>
          </div>
          <Description taskState={targetTaskState} />
          {modalEditMode !== ModalEditMode.View && (
            <SubmitButton
              targetTaskState={targetTaskState}
              targetCategoryState={targetCategoryState}
            />
          )}
        </div>
      </WizardModal>
    </>
  );
}

export default TaskModal;
