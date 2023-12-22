// jest setup file

// custom jest matchers for testing-library
import "@testing-library/jest-dom/extend-expect";

// Required changes with the next testing-library version:
// import "@testing-library/jest-dom/jest-globals";
// import "@testing-library/jest-dom";

jest.useFakeTimers();
