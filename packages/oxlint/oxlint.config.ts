import { defineConfig } from "oxlint";
import { core } from "./src/index.ts";

export default defineConfig({ extends: [core] });
