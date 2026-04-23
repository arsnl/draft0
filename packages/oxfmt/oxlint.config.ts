import type { OxlintConfig } from "oxlint";
import { defineConfig } from "@draft0/oxlint";

const config: OxlintConfig = defineConfig({ root: false, presets: ["vitest"] });

export default config;
