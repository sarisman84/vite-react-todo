import { use, useState } from "react";
import type { AppData } from "../../../data/app";
import type { Task } from "../../../data/task";
import WizardModal from "../../elements/wizard-modal";
import { EllipsisVertical, Plus } from "lucide-react";
import type { User } from "../../../data/user";
import ContextMenu from "../../elements/context-menu";
import ContextMenuItem from "../../elements/context-menu-item";
import { MenuButton } from "@headlessui/react";

interface ModalModeProps {
  editMode: boolean;
}

interface EditableElementProps extends ModalModeProps {
  input: string;
  setInput: (value: string) => void;
}

interface TaskModalProps {
  root: AppData;
  openFlag: boolean;
  setOpenFlag: (value: boolean) => void;
  task: Task;
}

interface TitleProps extends EditableElementProps {
  task: Task;
}

interface UserTagsProps extends ModalModeProps {
  task: Task;
  assignedUsers: User[];
  users: User[];
}

interface EditButtonProps {
  setEditMode: (value: boolean) => void;
}

interface DescriptionProps extends EditableElementProps {
  task: Task;
}

interface SubmitButton extends ModalModeProps {
  message: string;
  onSubmit: () => void;
}

function Title(ctx: TitleProps) {
  return (
    <div className="flex">
      {ctx.editMode ? (
        <input
          value={ctx.input}
          onChange={(e) => ctx.setInput(e.target.value)}
          className="font-bold text-text-800"
          placeholder="New Task"
        />
      ) : (
        <h1 className="font-bold text-text-800">{ctx.task.metadata.title}</h1>
      )}
    </div>
  );
}

function UserTags(ctx: UserTagsProps) {
  const availableUsers = ctx.users.filter((user) =>
    ctx.assignedUsers.find((assignedUser) => assignedUser.id !== user.id),
  );

  function _addUser(task: Task, userToAdd: User) {
    task.owner_id = [userToAdd.id, ...task.owner_id];
  }

  return (
    <div className="flex items-center gap-1">
      {ctx.assignedUsers.map((user) => (
        <label className="text-xs font-bold bg-accent-200 rounded-md py-1 px-1.5">
          {user.name}
        </label>
      ))}
      {ctx.editMode && (
        <ContextMenu>
          <MenuButton className="flex flex-col justify-center grow">
            <Plus
              size={20}
              className="text-text-700 hover:text-text-900 p-0.5 h-6 bg-accent-200 rounded-md"
            />
          </MenuButton>

          {availableUsers.map((user) => (
            <ContextMenuItem
              key={user.id}
              name={user.name}
              onClick={() => {
                _addUser(ctx.task, user);
              }}
              disable={false}
            ></ContextMenuItem>
          ))}
        </ContextMenu>
      )}
    </div>
  );
}

function EditButton(ctx: EditButtonProps) {
  return (
    <div className="pt-1">
      <ContextMenu>
        <MenuButton>
          <EllipsisVertical
            size={20}
            className="text-text-700 hover:text-text-900"
          />
        </MenuButton>
        <ContextMenuItem
          name="Edit"
          onClick={() => ctx.setEditMode(true)}
          disable={false}
        />
      </ContextMenu>
    </div>
  );
}

function Description(ctx: DescriptionProps) {
  return (
    <div className="flex flex-col gap-1">
      <h1 className="font-bold text-sm text-text-800">Description</h1>
      <div className="bg-background-100 rounded-md shadow min-h-30 p-2">
        {ctx.editMode ? (
          <textarea
            value={ctx.input}
            onChange={(e) => ctx.setInput(e.target.value)}
            placeholder="Lorem Ipsum"
            className="text-xs w-full min-h-30 text-text-900"
          />
        ) : (
          <p className="text-xs text-text-900">{ctx.task.metadata.description}</p>
        )}
      </div>
    </div>
  );
}

function SubmitButton(ctx: SubmitButton) {
  return (
    <div className="flex bg-accent-300 hover:bg-accent-500 p-1 rounded-md shadow w-15 justify-center">
      <button className="p-0.5 text-text-800" onClick={ctx.onSubmit}>
        {ctx.message}
      </button>
    </div>
  );
}

function TaskModal(ctx: TaskModalProps) {
  const [editMode, setEditMode] = useState(false);
  const [titleInput, setTitleInput] = useState(ctx.task.metadata.title);
  const [descInput, setDescInput] = useState(ctx.task.metadata.description);

  const assignedUsers = ctx.root.data.users.filter((user) =>
    ctx.task.owner_id.find((owner) => owner === user.id),
  );

  return (
    <>
      <WizardModal openFlag={ctx.openFlag} setOpenFlag={ctx.setOpenFlag}>
        <div className="flex flex-col gap-4 w-full h-full justify-between">
          <div className="flex justify-between">
            <Title
              task={ctx.task}
              editMode={editMode}
              input={titleInput}
              setInput={setTitleInput}
            />
            <div className="flex gap-1">
              <UserTags
                assignedUsers={assignedUsers}
                task={ctx.task}
                users={ctx.root.data.users}
                editMode={editMode}
              />
              <EditButton setEditMode={setEditMode} />
            </div>
          </div>
          <Description
            task={ctx.task}
            editMode={editMode}
            input={descInput}
            setInput={setDescInput}
          />
          {editMode && (
            <SubmitButton
              message="Save"
              onSubmit={() => {
                setEditMode(false);
              }}
              editMode={editMode}
            />
          )}
        </div>
      </WizardModal>
    </>
  );
}

export default TaskModal;
