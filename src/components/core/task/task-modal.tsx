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

  const [targetTask] = targetTaskState;
  const [targetCategory] = targetCategoryState;
  const [modalEditMode, setModalEditMode] = modalEditModeState;
  const [openFlag, setOpenFlag] = modalOpenState;

  const [title, setTitle] = useState(targetTask.metadata.title);
  const [desc, setDesc] = useState(targetTask.metadata.description);
  const [assignedUsers, setAssignedUsers] = useState<number[]>(targetTask?.assignedUserIds ?? []);

  return (
    <>
      <WizardModal openFlag={openFlag} setOpenFlag={setOpenFlag}>
        <div className="flex flex-col gap-4 w-full h-full justify-between">
          <div className="flex justify-between">
            <Title task={targetTask} inputState={[title, setTitle]} />
            <div className="flex gap-1">
              <UserTags
                task={targetTask}
                assignedUsersState={[assignedUsers, setAssignedUsers]}
              />
              <EditButton setModalEditMode={setModalEditMode} />
            </div>
          </div>
          <Description task={targetTask} inputState={[desc, setDesc]} />
          {modalEditMode !== ModalEditMode.View && (
            <SubmitButton
              targetTask={targetTask}
              targetCategory={targetCategory}
              title={title}
              description={desc}
              assignedUsers={assignedUsers}
            />
          )}
        </div>
      </WizardModal>
    </>
  );
}

export default TaskModal;
