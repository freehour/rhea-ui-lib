import { cva } from 'class-variance-authority';
import type { ComponentProps, CSSProperties, FunctionComponent } from 'react';
import { useMemo } from 'react';

import { Slot } from '@radix-ui/react-slot';

import type { VariantProps } from '@/types/variant';
import { cn } from '@/utils/cn';

import { badgeColorFamily } from './badge-color';


const badgeVariants = cva(
    `
    inline-flex
    w-fit
    shrink-0
    items-center
    justify-center
    gap-1
    overflow-hidden
    rounded-full
    border
    border-transparent
    px-2
    py-0.5
    text-xs
    font-medium
    whitespace-nowrap
    transition-[color,box-shadow]
    focus-visible:border-ring
    focus-visible:ring-[3px]
    focus-visible:ring-ring/50
    aria-invalid:border-destructive
    aria-invalid:ring-destructive/20
    dark:aria-invalid:ring-destructive/40
    [&>svg]:pointer-events-none
    [&>svg]:size-3
    `,
    {
        variants: {
            variant: {
                default: `
                    bg-primary
                    text-primary-foreground
                    [a&]:hover:bg-primary/90
                `,
                secondary: `
                    bg-secondary
                    text-secondary-foreground
                    [a&]:hover:bg-secondary/90
                `,
                destructive: `
                    bg-destructive
                    text-white
                    focus-visible:ring-destructive/20
                    dark:bg-destructive/60
                    dark:focus-visible:ring-destructive/40
                    [a&]:hover:bg-destructive/90
                `,
                outline: `
                    border-border
                    text-foreground
                    [a&]:hover:bg-accent
                    [a&]:hover:text-accent-foreground
                `,
                ghost: `
                    [a&]:hover:bg-accent
                    [a&]:hover:text-accent-foreground
                `,
                link: `
                    text-primary
                    underline-offset-4
                    [a&]:hover:underline
                `,
                autocolor: `
                    border-transparent
                `,
            },
        },
    },
);

export interface BadgeProps extends ComponentProps<'span'>, VariantProps<typeof badgeVariants> {
    asChild?: boolean;
    autoColorValue?: string;
}

export const Badge: FunctionComponent<BadgeProps> = ({
    className,
    variant = 'default',
    asChild = false,
    autoColorValue,
    style,
    children,
    ...props
}) => {
    const Comp = asChild ? Slot : 'span';
    const css = useMemo<CSSProperties | undefined>(() => {
        if (variant !== 'autocolor') {
            return style;
        }

        const source = autoColorValue ?? (typeof children === 'string' ? children : '');
        const family = badgeColorFamily(source);

        return {
            backgroundColor: `var(--color-${family}-200)`,
            color: `var(--color-${family}-950)`,
            ...style,
        };
    }, [autoColorValue, children, style, variant]);

    return (
        <Comp
            data-slot="badge"
            data-variant={variant}
            className={cn(badgeVariants({ variant }), className)}
            style={css}
            {...props}
        >
            {children}
        </Comp>
    );
};
