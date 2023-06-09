import React from "react";
import clsx from "clsx";

import { isEmpty } from "../utils";

export const Label = ({
  text,
  className,
  children,
  ...domProps
}: LabelProps) => {
  if (isEmpty(text)) return <>{children}</>;
  return (
    <label
      className={clsx("max-w-full w-full flex flex-col", className)}
      {...domProps}
    >
      <span className="mb-2 text-3 font-semibold">{text}</span>
      {children}
    </label>
  );
};

export interface LabelProps
  extends React.LabelHTMLAttributes<HTMLLabelElement> {
  text?: string;
  children?: React.ReactNode | React.ReactNode[];
}

export default Label;
