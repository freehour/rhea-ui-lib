import type { ComponentProps, FunctionComponent } from 'react';
import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';

import { Slot } from '@radix-ui/react-slot';

import { cn } from '@/utils/cn';


const itemVariants = cva(
    `
    group/item
    flex
    flex-wrap
    items-center
    rounded-md
    border
    border-transparent
    text-sm
    transition-colors
    duration-100
    outline-none
    focus-visible:border-ring
    focus-visible:ring-[3px]
    focus-visible:ring-ring/50
    [a]:transition-colors
    [a]:hover:bg-accent/50
    `,
    {
        variants: {
            variant: {
                default: 'bg-transparent',
                outline: 'border-border',
                muted: 'bg-muted/50',
            },
            size: {
                default: `
                    gap-4
                    p-4
                `,
                sm: `
                    gap-2.5
                    px-4
                    py-3
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
            className={cn(itemVariants({ variant, size, className }))}
            {...props}
        />
    );
};

