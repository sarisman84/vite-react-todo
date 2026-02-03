import { MenuButton } from "@headlessui/react";
import { EllipsisVertical } from "lucide-react";
import ContextMenu from "../../../elements/context-menu";
import ContextMenuItem from "../../../elements/context-menu-item";
import { ModalEditMode } from "../../../../data/task-modal/modal-edit-mode";

interface EditButtonProps {
  setModalEditMode: (value: ModalEditMode) => void;
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
          onClick={() => ctx.setModalEditMode(ModalEditMode.Edit)}
          disable={false}
        />
      </ContextMenu>
    </div>
  );
}

export default EditButton;
