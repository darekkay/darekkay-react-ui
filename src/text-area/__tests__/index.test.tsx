import React from "react";

import { render, screen, userEvent } from "../../testing";
import TextArea from "../index";

describe("<TextArea />", () => {
  test("renders without errors", () => {
    render(<TextArea setValue={() => null} />);
    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });

  test("fires an event on change", async () => {
    const setValueSpy = jest.fn();
    render(<TextArea setValue={setValueSpy} />);
    userEvent.type(screen.getByRole("textbox"), "hello");
    expect(setValueSpy).toHaveBeenCalledTimes(5);
  });
});
