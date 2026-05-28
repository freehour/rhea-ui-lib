import { cva } from 'class-variance-authority';
import type { ComponentProps, FunctionComponent } from 'react';

import type { VariantProps } from '@/types/variant';
import { cn } from '@/utils/cn';


const emptyMediaVariants = cva(
    `
    mb-2
    flex
    shrink-0
    items-center
    justify-center
    [&_svg]:pointer-events-none
    [&_svg]:shrink-0
    `,
    {
        variants: {
            variant: {
                default: 'bg-transparent',
                icon: `
                    flex
                    size-8
                    shrink-0
                    items-center
                    justify-center
                    rounded-lg
                    bg-muted
                    text-foreground
                    [&_svg:not([class*='size-'])]:size-4
                `,
            },
        },
    },
);

export interface EmptyMediaProps extends ComponentProps<'div'>, VariantProps<typeof emptyMediaVariants> {
}

export const EmptyMedia: FunctionComponent<EmptyMediaProps> = ({
    className,
    variant = 'default',
    ...props
}) => (
    <div
        data-slot="empty-media"
        data-variant={variant}
        className={cn(emptyMediaVariants({ variant }), className)}
        {...props}
    />
);
