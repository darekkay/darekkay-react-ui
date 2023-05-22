import React from "react";

import { render, screen } from "../../testing";
import Spinner from "../index";

describe("<Loading />", () => {
  test("renders a spinner", () => {
    render(<Spinner />);
    expect(
      screen.getByRole("progressbar", { name: /loading.../i })
    ).toBeInTheDocument();
  });

  test("renders a spinner with a custom aria label", () => {
    render(<Spinner ariaLabel="Custom" />);
    expect(
      screen.getByRole("progressbar", { name: /custom/i })
    ).toBeInTheDocument();
  });
});
