import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/react";
import { TableOfContents } from "lucide-react";
import React from "react";
import { Fragment } from "react/jsx-runtime";

interface ContextMenuProps extends React.PropsWithChildren {
  menuButton: React.ReactElement;
}

function ContextMenu(ctx: ContextMenuProps) {
  return (
    <div>
      <Menu>
        <MenuButton>{ctx.menuButton}</MenuButton>
        <MenuItems
          anchor="bottom end"
          className="bg-background-50 shadow rounded-md min-w-fit"
        >
          {React.Children.map(ctx.children, (child, index) => (
            <MenuItem as={Fragment} key={index}>
              {(item) => (
                <div
                  className={`w-full ${item.focus ? "bg-accent-200" : ""} px-1 py-1`}
                >
                  {child}
                </div>
              )}
            </MenuItem>
          ))}
        </MenuItems>
      </Menu>
    </div>
  );
}
export default ContextMenu;
