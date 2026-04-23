import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    projects: ["packages/*/vitest.config.ts"],
    coverage: {
      enabled: true,
      provider: "v8",
    },
  },
});
