import type { OxlintConfig } from "oxlint";
import { preset as analog } from "./analog.ts";
import { preset as angular } from "./angular.ts";
import { preset as astro } from "./astro.ts";
import { preset as core } from "./core.ts";
import { preset as ember } from "./ember.ts";
import { preset as jest } from "./jest.ts";
import { preset as jsx } from "./jsx.ts";
import { preset as lit } from "./lit.ts";
import { preset as nestjs } from "./nestjs.ts";
import { preset as nextjs } from "./nextjs.ts";
import { preset as nuxt } from "./nuxt.ts";
import { preset as playwright } from "./playwright.ts";
import { preset as preact } from "./preact.ts";
import { preset as qwik } from "./qwik.ts";
import { preset as reactNative } from "./react-native.ts";
import { preset as reactRouter } from "./react-router.ts";
import { preset as react } from "./react.ts";
import { preset as remix } from "./remix.ts";
import { preset as solid } from "./solid.ts";
import { preset as svelteKit } from "./svelte-kit.ts";
import { preset as svelte } from "./svelte.ts";
import { preset as tanstackStart } from "./tanstack-start.ts";
import { preset as vitest } from "./vitest.ts";
import { preset as vue } from "./vue.ts";

export type PresetName =
  | "analog"
  | "angular"
  | "astro"
  | "core"
  | "ember"
  | "jest"
  | "jsx"
  | "lit"
  | "nestjs"
  | "nextjs"
  | "nuxt"
  | "playwright"
  | "preact"
  | "qwik"
  | "reactNative"
  | "reactRouter"
  | "react"
  | "remix"
  | "solid"
  | "svelteKit"
  | "svelte"
  | "tanstackStart"
  | "vitest"
  | "vue";

export type Presets = Record<PresetName, OxlintConfig>;

export {
  analog,
  angular,
  astro,
  core,
  ember,
  jest,
  jsx,
  lit,
  nestjs,
  nextjs,
  nuxt,
  playwright,
  preact,
  qwik,
  reactNative,
  reactRouter,
  react,
  remix,
  solid,
  svelteKit,
  svelte,
  tanstackStart,
  vitest,
  vue,
};

/**
 * Presets for Oxlint.
 *
 * @see https://oxc.rs/docs/guide/usage/linter/config-file-reference for more information about the
 * configuration options.
 */
export const presets: Presets = {
  analog,
  angular,
  astro,
  core,
  ember,
  jest,
  jsx,
  lit,
  nestjs,
  nextjs,
  nuxt,
  playwright,
  preact,
  qwik,
  reactNative,
  reactRouter,
  react,
  remix,
  solid,
  svelteKit,
  svelte,
  tanstackStart,
  vitest,
  vue,
};
