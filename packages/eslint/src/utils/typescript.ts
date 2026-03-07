/**
 * Prettify a type to facilitate it's comprehension
 *
 * @example
 * ```ts
 * // Without Prettify
 * type Intersected = { a: string; } & { b: number; } & { c: boolean; };
 * // { a: string; } & { b: number; } & { c: boolean; }
 *
 * // With Prettify
 * type Intersected = Prettify<{ a: string; } & { b: number; } & { c: boolean; }>;
 * // { a: string; b: number; c: boolean }
 * ```
 */
export type Prettify<T> = {
  [K in keyof T]: T[K];
} & {};
