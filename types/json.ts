type Json = string | number | boolean | null | Json[] | { [key: string]: Json };

export type JSONValue<T = Json> =
    T extends string | number | boolean | null
        ? T
        : T extends (infer U)[]
            ? JSONValue<U>[]
            : T extends object
                ? { [K in keyof T]: T[K] extends undefined ? undefined : JSONValue<T[K]> }
                : never;

