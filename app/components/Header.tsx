"use client";

import { twMerge } from "tailwind-merge";
import PropsWithClassName from "../utils";
import Menu from "./Menu";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import {
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import DropdownLinkMenuItem from "./DropdownLinkMenuItem";
import { BsMoon, BsSun } from "react-icons/bs";
import { MenuIcon } from "lucide-react";
import HeaderMenu from "./HeaderMenu";

const Header: React.FC<PropsWithClassName> = ({ className }) => {
  const { theme, setTheme } = useTheme();

  return (
    <header
      className={twMerge(
        "grid h-auto grid-cols-2 rounded-xl bg-blue-200 px-2 py-4 dark:bg-blue-800",
        className,
      )}
    >
      <span className="text-xl font-bold">じこしょーかい</span>
      <div className="ml-auto flex">
        <Menu
          trigger={
            <Button className="p-3" variant="ghost">
              <MenuIcon />
            </Button>
          }
        >
          <HeaderMenu />
        </Menu>
      </div>
    </header>
  );
};

export default Header;
