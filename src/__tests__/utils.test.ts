/* eslint-disable unicorn/no-useless-undefined */
import { isEmpty } from "../utils";

describe("Utils", () => {
  test("isEmpty works as it should", () => {
    expect(isEmpty(undefined)).toBeTruthy();
    expect(isEmpty(null)).toBeTruthy();
    expect(isEmpty("")).toBeTruthy();
    expect(isEmpty([])).toBeTruthy();

    expect(isEmpty(" ")).toBeFalsy();
    expect(isEmpty("a")).toBeFalsy();
    expect(isEmpty(["a"])).toBeFalsy();
    expect(isEmpty(1)).toBeFalsy();
  });
});
