import type { OxlintConfig } from "oxlint";
import type { OxlintConfigName } from "../common.ts";
import { config as angular } from "./angular.ts";
import { config as astro } from "./astro.ts";
import { config as core } from "./core.ts";
import { config as jest } from "./jest.ts";
import { config as nestjs } from "./nestjs.ts";
import { config as next } from "./next.ts";
import { config as qwik } from "./qwik.ts";
import { config as react } from "./react.ts";
import { config as remix } from "./remix.ts";
import { config as solid } from "./solid.ts";
import { config as svelte } from "./svelte.ts";
import { config as vitest } from "./vitest.ts";
import { config as vue } from "./vue.ts";

export type AngularConfig = Configs["angular"];

export type AstroConfig = Configs["astro"];

export type CoreConfig = Configs["core"];

export type JestConfig = Configs["jest"];

export type NestjsConfig = Configs["nestjs"];

export type NextConfig = Configs["next"];

export type QwikConfig = Configs["qwik"];

export type ReactConfig = Configs["react"];

export type RemixConfig = Configs["remix"];

export type SolidConfig = Configs["solid"];

export type SvelteConfig = Configs["svelte"];

export type VitestConfig = Configs["vitest"];

export type VueConfig = Configs["vue"];

export type Configs = typeof configs;

export { angular, astro, core, jest, nestjs, next, qwik, react, remix, solid, svelte, vitest, vue };

export const configs = {
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
} satisfies Record<OxlintConfigName, OxlintConfig>;
