import React, { useState } from "react";
import clsx from "clsx";

import Button from "../button";
import Label from "../label";
import Icon from "../icon";
import icons from "../icon/icons";

const onKeyUp = (event: any, props: InputProps) => {
  if (event.key === "Enter" && props.onEnter) {
    props.onEnter(event.target.value);
  } else if (event.key === "Escape" && props.clearOnEscape) {
    props.setValue("");
  }
};

export const Input = (props: InputProps) => {
  const {
    className,
    label,
    value,
    setValue,
    clearOnEscape,
    onEnter,
    ...domProps
  } = props;
  const [isFocused, setFocused] = useState(false);
  const clearValue = () => setValue("");
  return (
    <Label text={label}>
      {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
      <div
        className="flex items-center w-full relative"
        // replace with onFocusIn / onFocusOut when implemented in React:
        // https://github.com/facebook/react/issues/6410
        onFocus={() => {
          setFocused(true);
        }}
        onBlur={() => {
          setFocused(false);
        }}
      >
        <input
          className={clsx(
            "w-full px-4 py-2 border rounded bg-default text-default",
            {
              "pr-7": isFocused,
            },
            className
          )}
          onChange={(event) => {
            setValue(event.target.value);
          }}
          onKeyUp={(event) => onKeyUp(event, props)}
          value={value}
          type="text"
          {...domProps}
        />
        {value && isFocused && (
          <Button
            className="absolute right-0 h-full"
            size="small"
            variant="unstyled"
            border={false}
            onMouseDown={clearValue}
            aria-hidden
            tabIndex={-1}
          >
            <Icon definition={icons.times} />
          </Button>
        )}
      </div>
    </Label>
  );
};

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  setValue: (value: string) => void;
  onEnter?: (value: string) => void;
  clearOnEscape?: boolean;
}

export default Input;
