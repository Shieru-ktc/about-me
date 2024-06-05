import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import React, { PropsWithChildren } from "react";

interface MenuProps extends PropsWithChildren {
  trigger: React.ReactNode;
}
const Menu: React.FC<MenuProps> = ({ children, trigger }) => {
  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>{trigger}</DropdownMenuTrigger>
      <DropdownMenuContent>{children}</DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Menu;
