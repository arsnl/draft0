import type { UserConfig } from "tsdown";

export const preset: UserConfig = {
  entry: ["src/**/*.ts", "!**/*.test.ts", "!**/*.spec.ts"],
  dts: true,
  // To make sure the output files have the .js and .d.ts extension.
  fixedExtension: false,
  deps: {
    skipNodeModulesBundle: true,
    onlyBundle: [],
  },
  attw: {
    profile: "esm-only",
    level: "warn",
  },
  publint: {
    level: "suggestion",
  },
};
