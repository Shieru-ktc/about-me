import { Input, InputProps } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { LabelProps } from "@radix-ui/react-label";
import { randomUUID } from "crypto";
import PropsWithClassName from "../utils";
import { twMerge } from "tailwind-merge";

type InputWithLabelProps = {
  inputProps?: InputProps;
  labelProps?: LabelProps;
  inputClassName?: string;
  labelClassName?: string;
  id?: string;
  labelName?: string;
} & PropsWithClassName;

const InputWithLabel: React.FC<InputWithLabelProps> = ({
  inputProps,
  labelProps,
  inputClassName,
  labelClassName,
  className,
  id: _id,
  labelName,
}) => {
  const id = _id ?? randomUUID();

  return (
    <div
      className={twMerge(
        "grid w-full max-w-sm items-center gap-1.5",
        className,
      )}
    >
      <Label htmlFor={id} className={labelClassName} {...labelProps}>
        {labelName}
      </Label>
      <Input id={id} className={inputClassName} {...inputProps} />
    </div>
  );
};

export default InputWithLabel;
