"use client";

import { BsSun, BsMoon } from "react-icons/bs";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { MenuIcon } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useState } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { usePathname } from "next/navigation";
import { twMerge } from "tailwind-merge";

export type HeaderMenuItem = {
  href: string;
  children: React.ReactNode;
};

type HeaderMenuProps = {
  items: HeaderMenuItem[];
};

type MenuContentProps = {
  click?: () => void;
} & HeaderMenuProps;

const MenuContent: React.FC<MenuContentProps> = ({ items, click }) => {
  const pathname = usePathname();

  return items.map((v, i) => (
    <Button
      variant="link"
      asChild
      key={i}
      onClick={click}
      disabled={pathname === v.href}
    >
      <Link
        href={v.href}
        className={
          pathname === v.href ? "font-extrabold underline" : "hover:underline"
        }
      >
        {v.children}
      </Link>
    </Button>
  ));
};
const Desktop: React.FC<HeaderMenuProps> = ({ items }) => {
  return (
    <div className="hidden animate-in fade-in md:flex">
      <MenuContent items={items} />
    </div>
  );
};
const Mobile: React.FC<HeaderMenuProps> = ({ items }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Sheet open={open} onOpenChange={setOpen} modal={false}>
        <SheetTrigger asChild>
          <Button
            className="animate-in fade-in md:hidden"
            variant="ghost"
            size="icon"
            onClick={() => setOpen(true)}
          >
            <MenuIcon />
          </Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>サイトメニュー</SheetTitle>
          </SheetHeader>
          <div className="flex flex-col">
            <MenuContent items={items} click={() => setOpen(false)} />
          </div>
          <SheetFooter className="mx-auto flex-grow">
            <ThemeSwitchButton wideButton />
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </>
  );
};
type ThemeSwitchButtonProps = {
  wideButton?: boolean;
};
const ThemeSwitchButton: React.FC<ThemeSwitchButtonProps> = ({
  wideButton,
}) => {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      onClick={() => {
        setTheme(theme === "light" ? "dark" : "light");
      }}
      className={twMerge(
        wideButton ? "w-full" : "",
        "rounded-full md:max-lg:h-10 md:max-lg:w-10 md:max-lg:bg-transparent md:max-lg:p-0 md:max-lg:[&:not(:hover)]:text-inherit",
      )}
    >
      {theme === "light" ? <BsSun /> : <BsMoon />}
      {wideButton ? (
        <span className="ml-1 animate-in zoom-in slide-in-from-left">
          テーマを切り替え
        </span>
      ) : (
        <span className="ml-1 hidden animate-in zoom-in slide-in-from-left lg:block">
          テーマを切り替え
        </span>
      )}
    </Button>
  );
};
const ThemeSwitch: React.FC = () => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <ThemeSwitchButton />
        </TooltipTrigger>
        <TooltipContent>
          <span className="ml-1">テーマを切り替え</span>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
const HeaderMenu: React.FC<HeaderMenuProps> = ({ items }) => {
  return (
    <>
      <Desktop items={items} />
      <Mobile items={items} />
      <div className="hidden animate-in fade-in md:flex">
        <ThemeSwitch />
      </div>
    </>
  );
};

export default HeaderMenu;
