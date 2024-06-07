import { PropsWithChildren, ReactNode } from "react";
import {
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
} from "@/components/ui/form";
import React from "react";
type RenderFormItemProps = {
  label?: ReactNode;
  description?: ReactNode;
  children: ReactNode;
} & PropsWithChildren;

const RenderFormItem: React.FC<RenderFormItemProps> = React.memo(
  ({ label, description, children }) => {
    console.log("rendered");
    return (
      <FormItem>
        <FormLabel>{label}</FormLabel>
        <FormControl>{children}</FormControl>
        <FormDescription>{description}</FormDescription>
        <FormMessage />
      </FormItem>
    );
  },
);

export default RenderFormItem;
