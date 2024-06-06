import { twMerge } from "tailwind-merge";
import PropsWithClassName from "../utils";
import HeaderMenu, { HeaderMenuItem } from "./HeaderMenu";

const MENU_ITEMS: HeaderMenuItem[] = [
  {
    href: "/",
    children: "ホーム",
  },
  {
    href: "/about",
    children: "自己紹介",
  },
  {
    href: "/contact",
    children: "お問い合わせ",
  },
  {
    href: "/test/sandbox",
    children: "サンドボックス",
  },
];

const Header: React.FC<PropsWithClassName> = ({ className }) => {
  return (
    <header
      className={twMerge(
        "flex h-auto rounded-xl bg-blue-200 px-2 py-4 dark:bg-blue-800",
        className,
      )}
    >
      <span className="text-xl font-bold">じこしょーかい</span>
      <div className="ml-auto flex">
        <HeaderMenu items={MENU_ITEMS} />
      </div>
    </header>
  );
};

export default Header;
