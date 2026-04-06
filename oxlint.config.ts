import { core } from "@kit42/ox/lint";
import { defineConfig } from "oxlint";

export default defineConfig({
  extends: [core],
  options: {
    reportUnusedDisableDirectives: "warn",
    typeAware: true,
    typeCheck: true,
  },
});
