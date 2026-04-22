import type { UserConfig } from "tsdown";

export const preset = {
  entry: ["src/**/*.ts", "!src/**/*.test.ts"],
  dts: true,
  // To make sure the output files have the .js and .d.ts extension.
  fixedExtension: false,
  deps: {
    skipNodeModulesBundle: true,
  },
  attw: {
    profile: "esm-only",
    level: "error",
  },
  publint: {
    level: "error",
  },
} as const satisfies UserConfig;
