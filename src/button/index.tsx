import React from "react";
import clsx from "clsx";

export type ButtonVariant = "primary" | "secondary" | "danger" | "unstyled";

export type ButtonSize = "regular" | "small" | "auto";

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className,
      variant = "primary",
      size = "regular",
      outline = false,
      border = true,
      style,
      ...domProps
    }: ButtonProps,
    ref
  ) => (
    <button
      className={clsx(
        "btn",
        `btn-${variant}`,
        { "btn-outline": outline },
        { "btn-small": size === "small" },
        { "border-0": !border },
        "justify-center",
        "no-underline",
        className
      )}
      style={style}
      type="button"
      {...domProps}
      ref={ref}
    >
      {children}
    </button>
  )
);

Button.displayName = "Button";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  outline?: boolean;
  border?: boolean;
  ref?: React.Ref<HTMLButtonElement>;
}

export default Button;
