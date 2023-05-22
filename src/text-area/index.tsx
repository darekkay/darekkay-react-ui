import React from "react";
import clsx from "clsx";

import Label from "../label";

export const TextArea = ({
  label,
  className,
  setValue,
  ...domProps
}: TextAreaProps) => {
  return (
    <Label text={label}>
      <textarea
        className={clsx(
          "py-2 px-4 w-full h-full border rounded resize-none bg-default",
          { "text-4": !className?.includes("text-") },
          className
        )}
        onChange={(event) => {
          setValue(event.target.value);
        }}
        {...domProps}
      />
    </Label>
  );
};

export interface TextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  setValue: (value: string) => void;
}

export default TextArea;
