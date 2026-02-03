import { MenuItem } from "@headlessui/react";

interface ContextMenuItemProps {
  name: string;
  onClick: () => void;
  disable: boolean;
}

function ContextMenuItem(ctx: ContextMenuItemProps) {
  const disabled = "text-xs text-text-600";
  const normal = "text-xs text-text-900 hover:bg-background-400";

  return (
    <MenuItem>
      <a
        className={`px-2 py-1 ${ctx.disable ? disabled : normal}`}
        onClick={() => (!ctx.disable ? ctx.onClick() : {})}
      >
        {ctx.name}
      </a>
    </MenuItem>
  );
}

export default ContextMenuItem;
