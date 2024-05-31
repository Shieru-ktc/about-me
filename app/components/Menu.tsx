import React from "react";
import { PropsWithRef } from "react";
import { BsGithub, BsTwitter } from "react-icons/bs";
import { SiOsu } from "react-icons/si";

const Sep: React.FC = () => {
  return (
    <hr className="my-1 h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10" />
  );
};
const Menu: React.FC = React.forwardRef((props, fowardedRef) => {
  return (
    <div className="w-full" ref={fowardedRef as React.RefObject<HTMLDivElement>}>
      <div className="flex items-center">
        <BsGithub className="m-2" />
        my github
      </div>
      <Sep />
      <div className="flex items-center">
        <BsTwitter className="m-2" />
        twitter
      </div>
      <Sep />
      <div className="flex items-center">
        <SiOsu className="m-2" />
        osu profile
      </div>
    </div>
  );
});

export default Menu;
