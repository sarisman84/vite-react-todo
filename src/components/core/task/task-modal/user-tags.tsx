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
  taskState: [Task, (value: Task) => void];
}

function _getUsername(id: number, users: User[]) {
  return users.find((user) => user.id === id)?.name;
}

function _getAvailableUsers(task: Task, users: User[]): User[] {
  if (
    task === undefined ||
    task.assignedUserIds === undefined ||
    task.assignedUserIds.length === 0
  ) {
    return users;
  }
  return users.filter((user) =>
    task.assignedUserIds.find((owner) => user.id === owner),
  );
}

function UserTags(ctx: UserTagsProps) {
  const { users } = useContext(Root);
  const { modalEditModeState } = useContext(Runtime);

  const [task, setTask] = ctx.taskState;
  const [modalEditMode] = modalEditModeState;

  const availableUsers = _getAvailableUsers(task, users);

  return (
    <div className="flex items-center gap-1">
      {task.assignedUserIds.map((id) => (
        <label
          key={id}
          className="text-xs font-bold bg-accent-200 rounded-md py-1 px-1.5"
        >
          {_getUsername(id, users)}
        </label>
      ))}
      {modalEditMode !== ModalEditMode.View && availableUsers.length > 0 && (
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
                setTask({
                  ...task,
                  assignedUserIds: [...task.assignedUserIds, user.id],
                });
              }}
              disable={false}
            ></ContextMenuItem>
          ))}
        </ContextMenu>
      )}
    </div>
  );
}

export default UserTags;
