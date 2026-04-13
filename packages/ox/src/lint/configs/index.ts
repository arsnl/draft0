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
