import type { ComponentProps, FunctionComponent } from 'react';

import { cn } from '@/utils/cn';


export interface SidebarMenuProps extends ComponentProps<'ul'> {
}

export const SidebarMenu: FunctionComponent<SidebarMenuProps> = ({ className, ...props }) => (
    <ul
        data-slot="sidebar-menu"
        data-sidebar="menu"
        className={cn(
            `
            flex
            w-full
            min-w-0
            flex-col
            gap-1
            `,
            className,
        )}
        {...props}
    />
);
