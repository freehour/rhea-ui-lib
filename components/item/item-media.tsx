import type { ComponentProps, FunctionComponent } from 'react';
import { cva } from 'class-variance-authority';

import type { VariantProps } from '@/types/variant';
import { cn } from '@/utils/cn';


const itemMediaVariants = cva(
    `
    flex
    shrink-0
    items-center
    justify-center
    gap-2
    group-has-data-[slot=item-description]/item:translate-y-0.5
    group-has-data-[slot=item-description]/item:self-start
    [&_svg]:pointer-events-none
    `,
    {
        variants: {
            variant: {
                default: 'bg-transparent',
                icon: '[&_svg:not([class*=\'size-\'])]:size-4',
                image: `
                    size-10
                    overflow-hidden
                    rounded-sm
                    group-data-[size=sm]/item:size-8
                    group-data-[size=xs]/item:size-6
                    [&_img]:size-full
                    [&_img]:object-cover
                `,
            },
        },
    },
);


export interface ItemMediaProps extends ComponentProps<'div'>, VariantProps<typeof itemMediaVariants> {
}

export const ItemMedia: FunctionComponent<ItemMediaProps> = ({
    className,
    variant = 'default',
    ...props
}) => (
    <div
        data-slot="item-media"
        data-variant={variant}
        className={cn(itemMediaVariants({ variant, className }))}
        {...props}
    />
);
