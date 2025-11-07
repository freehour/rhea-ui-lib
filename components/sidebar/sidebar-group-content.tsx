import type { ComponentProps, FunctionComponent } from 'react';

import { cn } from '@/utils/cn';


export interface SidebarGroupContentProps extends ComponentProps<'div'> {
}

export const SidebarGroupContent: FunctionComponent<SidebarGroupContentProps> = ({
    className,
    ...props
}) => (
    <div
        data-slot="sidebar-group-content"
        data-sidebar="group-content"
        className={cn(
            `
            w-full
            text-sm
            `,
            className,
        )}
        {...props}
    />
);
