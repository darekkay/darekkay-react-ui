import React from "react";

import { render } from "../../testing";
import Icon from "../index";

describe("<Icon />", () => {
  test("renders an icon with a single path", () => {
    const { container } = render(
      <Icon definition={[512, 512, "icon", "M 10,30"]} title="Settings" />
    );
    expect(container.querySelectorAll("svg path")).toHaveLength(1);
  });

  test("renders an icon with multiple paths", () => {
    const { container } = render(
      <Icon definition={[512, 512, "icon", ["M 10,30", "M 30,10"]]} />
    );
    expect(container.querySelectorAll("svg path")).toHaveLength(2);
  });
});
