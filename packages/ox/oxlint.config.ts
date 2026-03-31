import { defineConfig } from "oxlint";
import { core } from "./src/lint/index.ts";

export default defineConfig({
  extends: [core],
});
