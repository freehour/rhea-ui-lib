
import { cva } from 'class-variance-authority';
import type { ComponentProps, FunctionComponent } from 'react';

import type { VariantProps } from '@/types/variant';
import { cn } from '@/utils/cn';


const cardVariants = cva(
    `
    group/card
    flex
    flex-col
    gap-4
    overflow-hidden
    rounded-xl
    bg-card
    py-4
    text-sm
    text-card-foreground
    ring-1
    ring-foreground/10
    has-data-[slot=card-footer]:pb-0
    has-[>img:first-child]:pt-0
    *:[img:first-child]:rounded-t-xl
    *:[img:last-child]:rounded-b-xl
    `,
    {
        variants: {
            size: {
                default: '',
                sm: `
                    gap-3
                    py-3
                    has-data-[slot=card-footer]:pb-0
                `,
            },
        },
    },
);

export interface CardProps extends ComponentProps<'div'>, VariantProps<typeof cardVariants> {

}

export const Card: FunctionComponent<CardProps> = ({
    className,
    size = 'default',
    ...props
}) => (
    <div
        data-slot="card"
        data-size={size}
        className={cn(cardVariants({ size }), className)}
        {...props}
    />
);
