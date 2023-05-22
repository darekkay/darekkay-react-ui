export const isEmpty = (value: unknown) => {
  if (value === null || value === undefined) {
    return true;
  }

  if (Array.isArray(value) || typeof value === "string") {
    return !value.length;
  }

  return false;
};
