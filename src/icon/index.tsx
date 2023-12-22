import React, { HTMLAttributes } from "react";

export type IconDefinition = [
  number, // width
  number, // height
  string, // name
  string | string[], // svgPathData
];

export const Icon = ({
  definition,
  title,
  size,
  position,
  className,
  ...rest
}: IconProps) => {
  const [width, height, name, svgPathData] = definition;
  return (
    <dk-icon
      name={name}
      size={size}
      position={position}
      class={className}
      {...rest}
    >
      {/* eslint-disable-next-line jsx-a11y/prefer-tag-over-role */}
      <svg
        aria-hidden="true"
        focusable="false"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox={`0 0 ${width} ${height}`}
      >
        {title ? <title>{title}</title> : null}
        {typeof svgPathData === "string" && (
          <path fill="currentColor" d={svgPathData} />
        )}
        {typeof svgPathData !== "string" &&
          Array.isArray(svgPathData) &&
          svgPathData.map((path, index) => (
            <path
              key={index}
              className={`path-${index + 1}`}
              fill="currentColor"
              d={path}
            />
          ))}
      </svg>
    </dk-icon>
  );
};

/** Icon size, relative to the base size. */
type IconSize =
  | "minus-2"
  | "minus-1"
  | "plus-1"
  | "plus-2"
  | "plus-3"
  | "plus-4";

/** Icon position relative to another element. */
type IconPosition = "left" | "right";

export interface IconProps {
  definition: IconDefinition;
  title?: string;
  size?: IconSize;
  position?: IconPosition;
  className?: string;
}

export interface DkIconElement
  extends Omit<HTMLAttributes<HTMLElement>, "className"> {
  name: string;
  size?: IconSize;
  position?: IconPosition;
  class?: string;
}

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface IntrinsicElements {
      ["dk-icon"]: DkIconElement;
    }
  }
}

export default Icon;
