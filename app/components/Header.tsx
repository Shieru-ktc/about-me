"use client";

import { twMerge } from "tailwind-merge";
import PropsWithClassName from "../utils";
import { useState } from "react";
import Menu from "./Menu";
import { Transition } from "@headlessui/react";

const Header: React.FC<PropsWithClassName> = ({ className }) => {
  const [isOpened, setIsOpened] = useState(false);
  return (
    <header
      className={twMerge(
        "grid h-auto grid-cols-2 rounded-xl bg-blue-200 px-2 py-4",
        className,
      )}
    >
      <span className="text-xl font-bold">じこしょーかい</span>
      <button
        onClick={() => {
          setIsOpened(!isOpened);
        }}
        className="ml-auto"
      >
        ボタン
      </button>
      <Transition
        show={isOpened}
        enter="transition-transform duration-300 origin-top"
        enterFrom="transorm scale-y-0"
        enterTo="transform scale-y-1"
        leave="transition-transform duration-150 origin-top"
        leaveFrom="transform scale-y-1"
        leaveTo="transform scale-y-0"
        appear
      >
        <Menu />
      </Transition>
    </header>
  );
};

export default Header;
