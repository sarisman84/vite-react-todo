import { EllipsisVertical } from "lucide-react";
import type { Category } from "../../../data/category";
import ContextMenu from "../../elements/context-menu";
import CategoryTitle from "./category-title";
import ContextMenuItem from "../../elements/context-menu-item";
import { MenuButton } from "@headlessui/react";
import { useContext } from "react";
import { Root } from "../../../data/context/root";
import { Runtime } from "../../../data/context/runtime";

interface CategoryHeaderProps {
  category: Category;
}

function CategoryHeader(ctx: CategoryHeaderProps) {
  const { categoryEvents } = useContext(Root);
  const { modalOpenState } = useContext(Runtime);

  const [, setOpenFlag] = modalOpenState;

  return (
    <div className="flex py-2 px-1 items-center justify-between border-b-8 border-background-300">
      <CategoryTitle
        category={ctx.category}
        updateTitle={categoryEvents.updateCategory}
      />
      <ContextMenu>
        <MenuButton>
          <EllipsisVertical
            size={20}
            className="text-text-600 hover:text-text-900"
          />
        </MenuButton>

        <ContextMenuItem
          name="Add Task"
          onClick={() => setOpenFlag(true)}
          disable={false}
        />
        <ContextMenuItem
          name="Delete Category"
          onClick={() => categoryEvents.deleteCategory(ctx.category.id)}
          disable={!ctx.category.modifiable}
        />
      </ContextMenu>
    </div>
  );
}

export default CategoryHeader;
