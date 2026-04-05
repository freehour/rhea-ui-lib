import { cva } from 'class-variance-authority';
import type { ComponentProps, FunctionComponent } from 'react';

import { Slot } from '@radix-ui/react-slot';

import type { VariantProps } from '@/types/variant';
import { cn } from '@/utils/cn';


const itemVariants = cva(
    `
    group/item
    flex
    w-full
    flex-wrap
    items-center
    rounded-lg
    border
    text-sm
    transition-colors
    duration-100
    outline-none
    focus-visible:border-ring
    focus-visible:ring-[3px]
    focus-visible:ring-ring/50
    [a]:transition-colors
    [a]:hover:bg-muted
    `,
    {
        variants: {
            variant: {
                default: 'border-transparent',
                outline: 'border-border',
                muted: `
                    border-transparent
                    bg-muted/50
                `,
            },
            size: {
                default: `
                    gap-2.5
                    px-3
                    py-2.5
                `,
                sm: `
                    gap-2.5
                    px-3
                    py-2.5
                `,
                xs: `
                    gap-2
                    px-2.5
                    py-2
                    in-data-[slot=dropdown-menu-content]:p-0
                `,
            },
        },
    },
);

export interface ItemProps extends ComponentProps<'div'>, VariantProps<typeof itemVariants> {
    asChild?: boolean;
}

export const Item: FunctionComponent<ItemProps> = ({
    className,
    variant = 'default',
    size = 'default',
    asChild = false,
    ...props
}) => {
    const Comp = asChild ? Slot : 'div';
    return (
        <Comp
            data-slot="item"
            data-variant={variant}
            data-size={size}
            className={cn(itemVariants({ variant, size }), className)}
            {...props}
        />
    );
};

