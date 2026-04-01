import { config as core } from "./configs/core/core.ts";
import { config as jest } from "./configs/jest.ts";
import { config as vitest } from "./configs/vitest.ts";

const configs = {
  core,
  jest,
  vitest,
};

export { core, jest, vitest, configs };
