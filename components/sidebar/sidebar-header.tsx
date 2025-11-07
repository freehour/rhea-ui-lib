import type { ComponentProps, FunctionComponent } from 'react';

import { cn } from '@/utils/cn';


export interface SidebarHeaderProps extends ComponentProps<'div'> {
}

export const SidebarHeader: FunctionComponent<SidebarHeaderProps> = ({ className, ...props }) => (
    <div
        data-slot="sidebar-header"
        data-sidebar="header"
        className={cn(
            `
                flex
                flex-col
                p-2
                `,
            className,
        )}
        {...props}
    />
);

