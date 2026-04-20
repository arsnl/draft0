import type { OxlintConfig } from "oxlint";
import { preset as angular } from "./angular.ts";
import { preset as astro } from "./astro.ts";
import { preset as core } from "./core.ts";
import { preset as jest } from "./jest.ts";
import { preset as nestjs } from "./nestjs.ts";
import { preset as next } from "./next.ts";
import { preset as qwik } from "./qwik.ts";
import { preset as react } from "./react.ts";
import { preset as remix } from "./remix.ts";
import { preset as solid } from "./solid.ts";
import { preset as svelte } from "./svelte.ts";
import { preset as vitest } from "./vitest.ts";
import { preset as vue } from "./vue.ts";

export const presets = {
  angular,
  astro,
  core,
  jest,
  nestjs,
  next,
  qwik,
  react,
  remix,
  solid,
  svelte,
  vitest,
  vue,
} as const satisfies Record<string, OxlintConfig>;

export type Presets = typeof presets;

export type PresetName = keyof Presets;
