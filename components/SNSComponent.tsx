import PropsWithClassName from "@/app/utils";
import { twMerge } from "tailwind-merge";

type SNSComponentProps = {
  icon: React.ReactNode;
  href: string;
  title: string;
  description: string;
  account: string;
} & PropsWithClassName;

const SNSComponent: React.FC<SNSComponentProps> = ({
  icon,
  href,
  title,
  description,
  account,
  className,
}) => {
  return (
    <div
      className={twMerge(
        "h-30 flex items-center rounded-2xl border-2 border-blue-500 p-5",
        className,
      )}
    >
      <div className="mr-3 flex w-[5vw] flex-col items-center">
        <div className="text-[50px]">{icon}</div>
        <div className="font-bold">{title}</div>
      </div>
      <div className="">
        <a href={href} className="font-bold hover:underline">
          {account}
        </a>
        <p className="text-gray-600 dark:text-gray-400">{description}</p>
      </div>
    </div>
  );
};

export default SNSComponent;
