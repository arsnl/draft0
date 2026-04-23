import type { ViteUserConfig } from "vitest/config";
import { defineConfig } from "vitest/config";

const config: ViteUserConfig = defineConfig({
  test: {
    name: "tsdown",
    environment: "node",
    include: ["src/**/*.test.ts"],
  },
});

export default config;
