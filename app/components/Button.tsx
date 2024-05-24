import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color: Color;
}

type Color =
  | "primary"
  | "secondary"
  | "success"
  | "danger"
  | "warning"
  | "info";

// classnameを吐き出す関数
export const getColor = (color: Color): string => {
  switch (color) {
    case "primary":
      return "bg-primary-500";
    case "secondary":
      return "bg-secondary-500";
    case "success":
      return "bg-success-500";
    case "danger":
      return "bg-danger-500";
    case "warning":
      return "bg-warning-500";
    case "info":
      return "bg-info-500";
    default:
      return "bg-primary-500";
  }
};

const getHoverColor = (color: Color): string => {
  switch (color) {
    case "primary":
      return "hover:bg-primary-700";
    case "secondary":
      return "hover:bg-secondary-700";
    case "success":
      return "hover:bg-success-700";
    case "danger":
      return "hover:bg-danger-700";
    case "warning":
      return "hover:bg-warning-700";
    case "info":
      return "hover:bg-info-700";
    default:
      return "hover:bg-primary-700";
  }
};

const Button: React.FC<ButtonProps> = ({ children, color, ...props }) => {
  return (
    <button
      className={`rounded-md px-4 py-2 focus:outline-none focus:ring focus:ring-${color}-900 ${getColor(color)} ${props.className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
