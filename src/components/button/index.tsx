import { cva } from "class-variance-authority";
import type {
  ComponentWithClassname,
  PropsWithVariants,
} from "../../types/helpers";

export const buttonStyles = cva(
  "flex items-center gap-3 max-w-[320px] w-full rounded-md font-bold transition-colors",
  {
    variants: {
      size: {
        sm: "text-sm px-3 py-1",
        md: "text-base px-4 py-2",
        lg: "text-lg px-6 py-3",
      },
      color: {
        primary:
          "text-white bg-orange-600 hover:bg-orange-700 active:bg-orange-800",
        discord:
          'text-white bg-discord-500 hover:bg-discord-600 active:bg-discord-700"',
        google: "bg-white hover:bg-opacity-90 active:bg-opacity-80 text-black",
        opacity:
          "border-white bg-white bg-opacity-0 hover:bg-opacity-5 active:bg-opacity-10",
      },
      align: {
        center: "text-center justify-center",
        left: "",
      },
    },
  }
);

export type ButtonProps = PropsWithVariants<
  "button",
  typeof buttonStyles,
  { Icon?: ComponentWithClassname }
>;

export const Button = ({
  size,
  color,
  align,
  Icon,
  children,
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={buttonStyles({ className, size, color, align })}
      {...props}
    >
      {Icon && <Icon className={`h-auto w-6`} />}
      {children}
    </button>
  );
};
