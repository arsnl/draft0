import { next, react } from "@kit42/ox/lint";
import { defineConfig } from "oxlint";
import baseConfig from "../../oxlint.config.ts";

export default defineConfig({
  extends: [baseConfig, next, react],
});
