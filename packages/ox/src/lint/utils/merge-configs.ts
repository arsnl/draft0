import type { OxlintConfig } from "oxlint";

type FieldValue<T, K extends keyof OxlintConfig> = K extends keyof T ? T[K] : never;
type ObjectPart<T> = Extract<T, object>;
type ArrayPart<T> = Extract<T, readonly unknown[]>;
type Element<T> = T extends readonly (infer U)[] ? U : never;
type IsTuple<T extends readonly unknown[]> = number extends T["length"] ? false : true;
type HasDefined<T> = [Exclude<T, undefined>] extends [never] ? false : true;
type CanBeUndefined<T> = undefined extends T ? true : false;
type AlwaysPresent<T> =
  HasDefined<T> extends true ? (CanBeUndefined<T> extends true ? false : true) : false;
type Or<A extends boolean, B extends boolean> = A extends true ? true : B;

type MergeObjectField<A, B> = [ObjectPart<A> | ObjectPart<B>] extends [never]
  ? never
  : [ObjectPart<B>] extends [never]
    ? ObjectPart<A>
    : [ObjectPart<A>] extends [never]
      ? ObjectPart<B>
      : Omit<ObjectPart<A>, keyof ObjectPart<B>> & ObjectPart<B>;

type TupleIncludes<TTuple extends readonly unknown[], TValue> = TTuple extends readonly [
  infer THead,
  ...infer TTail,
]
  ? [THead] extends [TValue]
    ? true
    : TupleIncludes<TTail, TValue>
  : false;

type TupleDedupe<
  TTuple extends readonly unknown[],
  TSeen extends readonly unknown[] = [],
> = TTuple extends readonly [infer THead, ...infer TTail]
  ? TupleIncludes<TSeen, THead> extends true
    ? TupleDedupe<TTail, TSeen>
    : [THead, ...TupleDedupe<TTail, [...TSeen, THead]>]
  : [];

type ConcatArrayField<A, B> = [ArrayPart<A> | ArrayPart<B>] extends [never]
  ? never
  : [ArrayPart<B>] extends [never]
    ? ArrayPart<A>
    : [ArrayPart<A>] extends [never]
      ? ArrayPart<B>
      : IsTuple<ArrayPart<A>> extends true
        ? IsTuple<ArrayPart<B>> extends true
          ? [...ArrayPart<A>, ...ArrayPart<B>]
          : Array<Element<A> | Element<B>>
        : Array<Element<A> | Element<B>>;

type UniqueArrayField<A, B> = [ArrayPart<A> | ArrayPart<B>] extends [never]
  ? never
  : [ArrayPart<B>] extends [never]
    ? ArrayPart<A>
    : [ArrayPart<A>] extends [never]
      ? ArrayPart<B>
      : IsTuple<ArrayPart<A>> extends true
        ? IsTuple<ArrayPart<B>> extends true
          ? TupleDedupe<[...ArrayPart<A>, ...ArrayPart<B>]>
          : Array<Element<A> | Element<B>>
        : Array<Element<A> | Element<B>>;

type PresenceField<K extends PropertyKey, V, A, B> = [V] extends [never]
  ? Record<never, never>
  : Or<AlwaysPresent<A>, AlwaysPresent<B>> extends true
    ? { [P in K]: V }
    : { [P in K]?: V };

export type MergeConfigs<TSelf extends OxlintConfig, TOther, TRoot extends boolean> = Omit<
  TSelf,
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
> & {} & PresenceField<
    "categories",
    MergeObjectField<FieldValue<TOther, "categories">, FieldValue<TSelf, "categories">>,
    FieldValue<TOther, "categories">,
    FieldValue<TSelf, "categories">
  > &
  PresenceField<
    "rules",
    MergeObjectField<FieldValue<TOther, "rules">, FieldValue<TSelf, "rules">>,
    FieldValue<TOther, "rules">,
    FieldValue<TSelf, "rules">
  > &
  PresenceField<
    "plugins",
    UniqueArrayField<FieldValue<TOther, "plugins">, FieldValue<TSelf, "plugins">>,
    FieldValue<TOther, "plugins">,
    FieldValue<TSelf, "plugins">
  > &
  PresenceField<
    "jsPlugins",
    UniqueArrayField<FieldValue<TOther, "jsPlugins">, FieldValue<TSelf, "jsPlugins">>,
    FieldValue<TOther, "jsPlugins">,
    FieldValue<TSelf, "jsPlugins">
  > &
  PresenceField<
    "overrides",
    ConcatArrayField<FieldValue<TOther, "overrides">, FieldValue<TSelf, "overrides">>,
    FieldValue<TOther, "overrides">,
    FieldValue<TSelf, "overrides">
  > &
  PresenceField<
    "settings",
    MergeObjectField<FieldValue<TOther, "settings">, FieldValue<TSelf, "settings">>,
    FieldValue<TOther, "settings">,
    FieldValue<TSelf, "settings">
  > &
  PresenceField<
    "env",
    MergeObjectField<FieldValue<TOther, "env">, FieldValue<TSelf, "env">>,
    FieldValue<TOther, "env">,
    FieldValue<TSelf, "env">
  > &
  PresenceField<
    "globals",
    MergeObjectField<FieldValue<TOther, "globals">, FieldValue<TSelf, "globals">>,
    FieldValue<TOther, "globals">,
    FieldValue<TSelf, "globals">
  > &
  PresenceField<
    "ignorePatterns",
    UniqueArrayField<FieldValue<TOther, "ignorePatterns">, FieldValue<TSelf, "ignorePatterns">>,
    FieldValue<TOther, "ignorePatterns">,
    FieldValue<TSelf, "ignorePatterns">
  > &
  PresenceField<
    "extends",
    ConcatArrayField<FieldValue<TOther, "extends">, FieldValue<TSelf, "extends">>,
    FieldValue<TOther, "extends">,
    FieldValue<TSelf, "extends">
  > &
  (TRoot extends true
    ? PresenceField<
        "options",
        MergeObjectField<FieldValue<TOther, "options">, FieldValue<TSelf, "options">>,
        FieldValue<TOther, "options">,
        FieldValue<TSelf, "options">
      >
    : Record<never, never>);

export const mergeConfigs = (
  self: OxlintConfig,
  other: OxlintConfig = {},
  { root = true }: { root?: boolean } = {},
): OxlintConfig => {
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
  };
};
