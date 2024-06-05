import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { PropsWithChildren } from "react";

interface DropdownLinkMenuItemProps extends PropsWithChildren {
  href: string;
}

const DropdownLinkMenuItem: React.FC<DropdownLinkMenuItemProps> = ({
  children,
  href,
}) => {
  return (
    <Link href={href}>
      <DropdownMenuItem>{children}</DropdownMenuItem>
    </Link>
  );
};

export default DropdownLinkMenuItem;
