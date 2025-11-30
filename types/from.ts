/**
 * Typesafe and autocompleting version of `Extract` that extracts types from a base type.
 */
export type ExtractFrom<Base, Derived extends Base> = Extract<Base, Derived>;

/**
 * Typesafe and autocompleting version of `Omit` that omits keys from a base type.
 */
export type OmitFrom<Base, Keys extends keyof Base> = Omit<Base, Keys>;

