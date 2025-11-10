export type JSONValue<T = unknown> =
  T extends string | number | boolean | null
      ? T
      : T extends (infer U)[]
          ? JSONValue<U>[]
          : T extends object
              ? { [K in keyof T]: JSONValue<T[K]> }
              : never;
