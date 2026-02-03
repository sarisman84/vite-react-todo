import { MenuButton } from "@headlessui/react";
import { Plus } from "lucide-react";
import type { Task, TaskEvents } from "../../../../data/task";
import type { User } from "../../../../data/user";
import ContextMenu from "../../../elements/context-menu";
import ContextMenuItem from "../../../elements/context-menu-item";
import { useContext } from "react";
import { ModalEditMode } from "../../../../data/task-modal/modal-edit-mode";
import { Root } from "../../../../data/context/root";
import { Runtime } from "../../../../data/context/runtime";

interface UserTagsProps {
  task: Task;
  assignedUsersState: [number[], (value: number[]) => void];
}

function _getUsername(id: number, users: User[]) {
  return users.find((user) => user.id === id)?.name;
}

function UserTags(ctx: UserTagsProps) {
  const { users, taskEvents } = useContext(Root);
  const { modalEditModeState } = useContext(Runtime);

  const [assignedUserIds, setAssignedUsersIds] = ctx.assignedUsersState;
  const [modalEditMode] = modalEditModeState;

  const availableUsers = users.filter((user) =>
    assignedUserIds.find((id) => id !== user.id),
  );

  return (
    <div className="flex items-center gap-1">
      {assignedUserIds.map((id) => (
        <label className="text-xs font-bold bg-accent-200 rounded-md py-1 px-1.5">
          {_getUsername(id, users)}
        </label>
      ))}
      {modalEditMode !== ModalEditMode.View ? (
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
                setAssignedUsersIds([user.id, ...assignedUserIds]);
              }}
              disable={false}
            ></ContextMenuItem>
          ))}
        </ContextMenu>
      ) : (
        <></>
      )}
    </div>
  );
}

export default UserTags;
