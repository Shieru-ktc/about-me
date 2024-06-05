"use client";

import {
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { BsSun, BsMoon } from "react-icons/bs";
import DropdownLinkMenuItem from "./DropdownLinkMenuItem";
import { useTheme } from "next-themes";

const HeaderMenu: React.FC = () => {
  const { theme, setTheme } = useTheme();
  return (
    <>
      <DropdownMenuLabel>Main Menu</DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownLinkMenuItem href="/test/sandbox">Sandbox</DropdownLinkMenuItem>
      <DropdownLinkMenuItem href="/">Top page</DropdownLinkMenuItem>
      <DropdownLinkMenuItem href="/aoyama">Aoyama</DropdownLinkMenuItem>
      <DropdownMenuSeparator />
      <DropdownMenuItem
        onClick={() => {
          setTheme(theme === "light" ? "dark" : "light");
        }}
      >
        {theme === "light" ? <BsSun /> : <BsMoon />}
        <span className="ml-1">テーマを切り替え</span>
      </DropdownMenuItem>
    </>
  );
};

export default HeaderMenu;
