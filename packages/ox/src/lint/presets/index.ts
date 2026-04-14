import type { OxlintConfig } from "oxlint";
import type { PresetName } from "../common.ts";
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

export type AngularPreset = Presets["angular"];

export type AstroPreset = Presets["astro"];

export type CorePreset = Presets["core"];

export type JestPreset = Presets["jest"];

export type NestjsPreset = Presets["nestjs"];

export type NextPreset = Presets["next"];

export type QwikPreset = Presets["qwik"];

export type ReactPreset = Presets["react"];

export type RemixPreset = Presets["remix"];

export type SolidPreset = Presets["solid"];

export type SveltePreset = Presets["svelte"];

export type VitestPreset = Presets["vitest"];

export type VuePreset = Presets["vue"];

export type Presets = typeof presets;

export { angular, astro, core, jest, nestjs, next, qwik, react, remix, solid, svelte, vitest, vue };

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
} satisfies Record<PresetName, OxlintConfig>;
