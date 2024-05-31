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
        "grid grid-cols-2 rounded-xl bg-blue-200 px-2 py-4",
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
        enter="transition-opacity duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-150"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <Menu />
      </Transition>
    </header>
  );
};

export default Header;
