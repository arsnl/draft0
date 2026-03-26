import { type Prettify } from "./typescript.js";

type PrefixKeys<
  TPrefix extends string,
  TRules extends Record<string, unknown>,
> = {
  readonly [K in keyof TRules as K extends string
    ? `${TPrefix}/${K}`
    : never]: TRules[K];
};

export const prefixRules = <
  const TPrefix extends string,
  const TRules extends Record<string, readonly unknown[]>,
>(
  prefix: TPrefix,
  rules: TRules,
): Prettify<PrefixKeys<TPrefix, TRules>> =>
  Object.fromEntries(
    Object.entries(rules).map(([key, value]) => [`${prefix}/${key}`, value]),
  ) as PrefixKeys<TPrefix, TRules>;
