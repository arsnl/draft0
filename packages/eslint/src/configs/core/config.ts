import { defineConfig } from "eslint/config";
import core from "./rules/eslint.js";
import perfectionist from "./rules/perfectionist.js";
import typescript from "./rules/typescript.js";
import unicorn from "./rules/unicorn.js";

export const config = defineConfig([
  core,
  typescript,
  // perfectionist, // Disabled temporarily in order to find the best settings
  unicorn,
]);

export default config;
