import type { ComponentProps, FunctionComponent } from 'react';
import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';

import * as TabsPrimitive from '@radix-ui/react-tabs';

import { cn } from '@/utils/cn';


const tabsListVariants = cva(
    `
    group/tabs-list
    inline-flex
    w-fit
    items-center
    justify-center
    rounded-lg
    p-0.75
    text-muted-foreground
    group-data-horizontal/tabs:h-8
    group-data-vertical/tabs:h-fit
    group-data-vertical/tabs:flex-col
    data-[variant=line]:rounded-none
    `,
    {
        variants: {
            variant: {
                default: `
                    bg-muted
                `,
                line: `
                    gap-1
                    bg-transparent
                `,
            },
        },
    },
);

export interface TabsListProps extends ComponentProps<typeof TabsPrimitive.List>, VariantProps<typeof tabsListVariants> {
}

export const TabsList: FunctionComponent<TabsListProps> = ({
    className,
    variant = 'default',
    ...props
}) => (
    <TabsPrimitive.List
        data-slot="tabs-list"
        data-variant={variant}
        className={cn(tabsListVariants({ variant }), className)}
        {...props}
    />
);
