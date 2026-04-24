import type { OxlintConfig } from "oxlint";
import { preset as angular } from "./angular.ts";
import { preset as astro } from "./astro.ts";
import { preset as core } from "./core.ts";
import { preset as jest } from "./jest.ts";
import { preset as nestjs } from "./nestjs.ts";
import { preset as next } from "./next.ts";
import { preset as playwright } from "./playwright.ts";
import { preset as qwik } from "./qwik.ts";
import { preset as reactRouter } from "./react-router.ts";
import { preset as react } from "./react.ts";
import { preset as remix } from "./remix.ts";
import { preset as solid } from "./solid.ts";
import { preset as svelte } from "./svelte.ts";
import { preset as vitest } from "./vitest.ts";
import { preset as vue } from "./vue.ts";

export type PresetName =
  | "angular"
  | "astro"
  | "core"
  | "jest"
  | "nestjs"
  | "next"
  | "playwright"
  | "qwik"
  | "reactRouter"
  | "react"
  | "remix"
  | "solid"
  | "svelte"
  | "vitest"
  | "vue";

export type Presets = Record<PresetName, OxlintConfig>;

export { angular, astro, core, jest, nestjs, next, qwik, react, remix, solid, svelte, vitest, vue };

/**
 * Presets for Oxlint.
 *
 * @see https://oxc.rs/docs/guide/usage/linter/config-file-reference for more information about the
 * configuration options.
 */
export const presets: Presets = {
  angular,
  astro,
  core,
  jest,
  nestjs,
  next,
  playwright,
  qwik,
  reactRouter,
  react,
  remix,
  solid,
  svelte,
  vitest,
  vue,
};
