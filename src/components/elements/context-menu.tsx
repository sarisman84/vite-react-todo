import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/react";
import React from "react";
import { Fragment } from "react/jsx-runtime";

interface ContextMenuProps extends React.PropsWithChildren {}

function ContextMenu(ctx: ContextMenuProps) {
  return (
    <div>
      <Menu>
        {React.Children.map(ctx.children, (child, index) => {
          if (index !== 0) {
            return;
          }

          return child;
        })}
        <MenuItems
          anchor="bottom end"
          className="flex flex-col bg-background-50 shadow rounded-md h-fit"
        >
          {React.Children.map(ctx.children, (child, index) => {
            if (index === 0) {
              return;
            }

            return child;
          })}
        </MenuItems>
      </Menu>
    </div>
  );
}
export default ContextMenu;
