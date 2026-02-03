import { EllipsisVertical } from "lucide-react";
import { useState } from "react";
import type { AppData } from "../../../data/app";
import type { Category } from "../../../data/category";
import ContextMenu from "../../elements/context-menu";
import CategoryTitle from "./category-title";
import ContextMenuItem from "../../elements/context-menu-item";
import { MenuButton } from "@headlessui/react";

interface CategoryHeaderProps {
  category: Category;
  root: AppData;
  setTCWOpenFlag: (value: boolean) => void;
}

function CategoryHeader(ctx: CategoryHeaderProps) {
  const [editFlag, _] = useState(false);

  const onCategoryRemoved = ctx.root.events.category.onCategoryRemoved;

  return (
    <div className="flex py-2 px-1 items-center justify-between border-b-8 border-background-300">
      <CategoryTitle
        category={ctx.category}
        updateTitle={ctx.root.events.category.onCategoryTitleUpdated}
        editFlag={editFlag}
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
          onClick={() => ctx.setTCWOpenFlag(true)}
          disable={false}
        />
        <ContextMenuItem
          name="Delete Category"
          onClick={() => onCategoryRemoved(ctx.category.id)}
          disable={!ctx.category.modifiable}
        />
      </ContextMenu>
    </div>
  );
}

export default CategoryHeader;
