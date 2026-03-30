import { defineConfig } from "oxlint";
import eslint from "./rules/eslint.ts";
import eslintJs from "./rules/eslint-js.ts";
import typescript from "./rules/typescript.ts";
import unicorn from "./rules/unicorn.ts";
import oxc from "./rules/oxc.ts";

export const config = defineConfig({
  extends: [eslint, eslintJs, typescript, unicorn, oxc],
  /* disable all categories so that we can enable them selectively */
  categories: {
    correctness: "off",
    nursery: "off",
    pedantic: "off",
    perf: "off",
    restriction: "off",
    style: "off",
    suspicious: "off",
  },
});

export default config;
