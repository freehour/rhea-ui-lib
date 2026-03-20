import type { ComponentProps, FunctionComponent } from 'react';
import { cva } from 'class-variance-authority';

import * as TabsPrimitive from '@radix-ui/react-tabs';

import type { VariantProps } from '@/types/variant';
import { cn } from '@/utils/cn';


const tabsVariants = cva(
    `
    group/tabs
    flex
    gap-2
    `,
    {
        variants: {
            orientation: {
                horizontal: `
                    flex-col
                `,
                vertical: `
                    flex-row
                `,
            },
        },
    },
);

export interface TabsProps extends ComponentProps<typeof TabsPrimitive.Root>, Omit<VariantProps<typeof tabsVariants>, 'orientation'> {
}

export const Tabs: FunctionComponent<TabsProps> = ({
    className,
    orientation = 'horizontal',
    ...props
}) => (
    <TabsPrimitive.Root
        data-slot="tabs"
        data-orientation={orientation}
        orientation={orientation}
        className={cn(
            tabsVariants({ orientation }),
            className,
        )}
        {...props}
    />
);
