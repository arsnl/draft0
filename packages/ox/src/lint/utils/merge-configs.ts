import type { OxlintConfig } from "oxlint";
import type { Except, IsNever, IsUnknown, Merge, SimplifyDeep } from "type-fest";

type IsExactlyUndefined<M> = [M] extends [undefined]
  ? [undefined] extends [M]
    ? true
    : false
  : false;

type IsAbsentMerge<M> =
  IsNever<M> extends true
    ? true
    : IsUnknown<M> extends true
      ? true
      : IsExactlyUndefined<M> extends true
        ? true
        : false;

type DedupeTuple<T extends unknown[], Seen = never> = T extends [infer Head, ...infer Tail]
  ? Head extends Seen
    ? DedupeTuple<Tail, Seen>
    : [Head, ...DedupeTuple<Tail, Seen | Head>]
  : [];

type UniqueConcat<A, B> = A extends readonly unknown[]
  ? B extends readonly unknown[]
    ? DedupeTuple<[...A, ...B]>
    : DedupeTuple<[...A]>
  : B extends readonly unknown[]
    ? DedupeTuple<[...B]>
    : never;

type Concat<A, B> = A extends unknown[]
  ? B extends unknown[]
    ? [...A, ...B]
    : [...A]
  : B extends unknown[]
    ? [...B]
    : never;

type MergeField<K, M> =
  IsAbsentMerge<M> extends true ? Record<never, never> : { [P in K & PropertyKey]: M };

type MergeConfigs<
  Other extends OxlintConfig,
  Self extends OxlintConfig,
  TRoot extends boolean = true,
> = SimplifyDeep<
  MergeField<"categories", Merge<Other["categories"], Self["categories"]>> &
    MergeField<"rules", Merge<Other["rules"], Self["rules"]>> &
    (TRoot extends true
      ? MergeField<"options", Merge<Other["options"], Self["options"]>>
      : Record<never, never>) &
    MergeField<"plugins", UniqueConcat<Other["plugins"], Self["plugins"]>> &
    MergeField<"jsPlugins", UniqueConcat<Other["jsPlugins"], Self["jsPlugins"]>> &
    MergeField<"overrides", Concat<Other["overrides"], Self["overrides"]>> &
    MergeField<"settings", Merge<Other["settings"], Self["settings"]>> &
    MergeField<"env", Merge<Other["env"], Self["env"]>> &
    MergeField<"globals", Merge<Other["globals"], Self["globals"]>> &
    MergeField<"ignorePatterns", UniqueConcat<Other["ignorePatterns"], Self["ignorePatterns"]>> &
    MergeField<"extends", Concat<Other["extends"], Self["extends"]>> &
    Except<
      Self,
      | "categories"
      | "rules"
      | "options"
      | "plugins"
      | "jsPlugins"
      | "overrides"
      | "settings"
      | "env"
      | "globals"
      | "ignorePatterns"
      | "extends"
    >
>;

export const mergeConfigs = <
  const TSelf extends OxlintConfig,
  const TOther extends OxlintConfig,
  const TRoot extends boolean = true,
>(
  self: TSelf,
  other: TOther = {} as TOther,
  { root = true as TRoot }: { root?: TRoot } = {},
) => {
  const {
    categories: _categories,
    rules: _rules,
    options: _options,
    plugins: _plugins,
    jsPlugins: _jsPlugins,
    overrides: _overrides,
    settings: _settings,
    env: _env,
    globals: _globals,
    ignorePatterns: _ignorePatterns,
    extends: _extends,
    ...rest
  } = self;

  return {
    ...((self.categories ?? other.categories) !== undefined && {
      categories: { ...other.categories, ...self.categories },
    }),
    ...((self.rules ?? other.rules) !== undefined && {
      rules: { ...other.rules, ...self.rules },
    }),
    ...(root &&
      (self.options ?? other.options) !== undefined && {
        options: { ...other.options, ...self.options },
      }),
    ...((self.plugins ?? other.plugins) !== undefined && {
      plugins: [...new Set([...(other.plugins ?? []), ...(self.plugins ?? [])])],
    }),
    ...((self.jsPlugins ?? other.jsPlugins) !== undefined && {
      jsPlugins: [...new Set([...(other.jsPlugins ?? []), ...(self.jsPlugins ?? [])])],
    }),
    ...((self.overrides ?? other.overrides) !== undefined && {
      overrides: [...(other.overrides ?? []), ...(self.overrides ?? [])],
    }),
    ...((self.settings ?? other.settings) !== undefined && {
      settings: { ...other.settings, ...self.settings },
    }),
    ...((self.env ?? other.env) !== undefined && {
      env: { ...other.env, ...self.env },
    }),
    ...((self.globals ?? other.globals) !== undefined && {
      globals: { ...other.globals, ...self.globals },
    }),
    ...((self.ignorePatterns ?? other.ignorePatterns) !== undefined && {
      ignorePatterns: [
        ...new Set([...(other.ignorePatterns ?? []), ...(self.ignorePatterns ?? [])]),
      ],
    }),
    ...((self.extends ?? other.extends) !== undefined && {
      extends: [...(other.extends ?? []), ...(self.extends ?? [])],
    }),
    ...rest,
  } as MergeConfigs<TSelf, TOther, TRoot>;
};
