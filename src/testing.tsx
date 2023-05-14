/**
 * Common wrapper around testing utilities.
 *
 * All utilities from @testing-library/react are re-exported.
 * Additionally, utilities from @testing-library/user-event are provided.
 * */

import userEvent from "@testing-library/user-event";

// Re-export utilities from @testing-library
export * from "@testing-library/react";

export { userEvent };
