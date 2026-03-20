import type { ComponentProps, FunctionComponent } from 'react';

import * as TabsPrimitive from '@radix-ui/react-tabs';

import { cn } from '@/utils/cn';


export interface TabsContentProps extends ComponentProps<typeof TabsPrimitive.Content> {
}

export const TabsContent: FunctionComponent<TabsContentProps> = ({
    className,
    ...props
}) => (
    <TabsPrimitive.Content
        data-slot="tabs-content"
        className={cn(
            `
            flex-1
            text-sm
            outline-none
            `,
            className,
        )}
        {...props}
    />
);
