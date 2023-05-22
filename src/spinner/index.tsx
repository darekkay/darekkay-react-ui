import React, { HTMLAttributes } from "react";
import clsx from "clsx";

export const Spinner = ({ className, ariaLabel = "Loading..." }: Props) => {
  return (
    // eslint-disable-next-line jsx-a11y/prefer-tag-over-role
    <dk-spinner
      class={clsx("spinner", "mx-auto", className)}
      role="progressbar"
      aria-busy
      aria-label={ariaLabel}
    />
  );
};

export interface Props {
  className?: string;
  ariaLabel?: string;
}

export interface DkSpinnerElement
  extends Omit<HTMLAttributes<HTMLElement>, "className"> {
  class?: string;
}

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface IntrinsicElements {
      ["dk-spinner"]: DkSpinnerElement;
    }
  }
}

export default Spinner;
