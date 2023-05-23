/** True, if the application is running in test environment */
export const IS_TEST = process.env.NODE_ENV === "test";

export const isEmpty = (value: unknown) => {
  if (value === null || value === undefined) {
    return true;
  }

  if (Array.isArray(value) || typeof value === "string") {
    return !value.length;
  }

  return false;
};
