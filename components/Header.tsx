import { twMerge } from "tailwind-merge";
import PropsWithClassName from "../app/utils";
import HeaderMenu, { HeaderMenuItem } from "./HeaderMenu";

const MENU_ITEMS: HeaderMenuItem[] = [
  {
    href: "/",
    children: "ホーム",
  },
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
    children: "その他の質問",
  },
  {
    href: "/contact",
    children: "お問い合わせ",
  },

  // {
  //   href: "/test/sandbox",
  //   children: "サンドボックス",
  // },
];

const Header: React.FC<PropsWithClassName> = ({ className }) => {
  return (
    <header
      className={twMerge(
        "flex h-auto rounded-xl bg-blue-200 px-2 py-4 dark:bg-blue-800",
        className,
      )}
    >
      <span className="my-auto text-2xl font-bold">自己紹介</span>
      <div className="ml-auto flex">
        <HeaderMenu items={MENU_ITEMS} />
      </div>
    </header>
  );
};

export default Header;
