import { TableOfContents } from "lucide-react";
import { useState } from "react";
import type { AppData } from "../../../data/app";
import type { Category } from "../../../data/category";
import ContextMenu from "../../elements/context-menu";
import CategoryTitle from "./category-title";
import { MenuItem } from "@headlessui/react";
import ContextMenuItem from "../../elements/context-menu-item";

interface CategoryHeaderProps {
  category: Category;
  root: AppData;
  setOpenFlag: (value: boolean) => void;
}

function CategoryHeader(ctx: CategoryHeaderProps) {
  const [editFlag, _] = useState(false);

  const onCategoryRemoved = ctx.root.events.category.onCategoryRemoved;

  return (
    <div className="flex justify-between">
      <CategoryTitle
        category={ctx.category}
        updateTitle={ctx.root.events.category.onCategoryTitleUpdated}
        editFlag={editFlag}
      />
      <ContextMenu
        menuButton={
          <TableOfContents
            size={20}
            className="text-text-600 hover:text-text-900"
          />
        }
      >
        <ContextMenuItem
          name="Add Task"
          onClick={() => ctx.setOpenFlag(true)}
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
