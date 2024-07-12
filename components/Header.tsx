import { twMerge } from "tailwind-merge";
import PropsWithClassName from "../app/utils";
import HeaderMenu, { HeaderMenuItem } from "./HeaderMenu";
import Link from "next/link";

const MENU_ITEMS: HeaderMenuItem[] = [
  {
    href: "/profile",
    children: "プロフィール",
  },
  {
    href: "/likes",
    children: "好きなもの",
  },
  {
    href: "/sns",
    children: "SNSアカウント",
  },
  {
    href: "/faq",
    children: "よく来ない質問",
  }
];

const Header: React.FC<PropsWithClassName> = ({ className }) => {
  return (
    <header
      className={twMerge(
        "flex h-auto rounded-xl bg-blue-200 px-2 py-4 dark:bg-blue-800 md:max-xl:flex-col xl:flex-row",
        className,
      )}
    >
      <Link className="my-auto text-2xl font-bold" href="/">自己紹介</Link>
      <div className="ml-auto flex">
        <HeaderMenu items={MENU_ITEMS} />
      </div>
    </header>
  );
};

export default Header;
