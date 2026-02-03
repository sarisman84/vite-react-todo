import { MenuItem } from "@headlessui/react";

interface ContextMenuItemProps {
  name: string;
  onClick: () => void;
  disable: boolean;
}

function ContextMenuItem(ctx: ContextMenuItemProps) {
  const disabled = "text-text-600 bg-background-50";
  const normal = "text-text-900 bg-background-50 hover:bg-accent-200";

  return (
    <MenuItem>
      <a
        className={`p-1 ${ctx.disable ? disabled : normal}`}
        onClick={() => (!ctx.disable ? ctx.onClick() : {})}
      >
        {ctx.name}
      </a>
    </MenuItem>
  );
}

export default ContextMenuItem;
