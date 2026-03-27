import { defineConfig } from "eslint/config";

import compat from "./rules/compat.js";
import core from "./rules/eslint.js";
import perfectionist from "./rules/perfectionist.js";
import typescript from "./rules/typescript.js";
import unicorn from "./rules/unicorn.js";

export const config = defineConfig([
  core,
  typescript,
  perfectionist,
  unicorn,
  compat,
]);

export default config;
