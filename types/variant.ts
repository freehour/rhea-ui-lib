import type { VariantProps as CvaVariantProps } from 'class-variance-authority';


export type VariantProps<Component extends (...args: any) => any> = {
    [K in keyof CvaVariantProps<Component>]?: Exclude<CvaVariantProps<Component>[K], null>;
};
