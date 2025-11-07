import type { ComponentProps, FunctionComponent } from 'react';

import { cn } from '@/utils/cn';


export interface SidebarMenuSubProps extends ComponentProps<'ul'> {
}

export const SidebarMenuSub: FunctionComponent<SidebarMenuSubProps> = ({ className, ...props }) => (
    <ul
        data-slot="sidebar-menu-sub"
        data-sidebar="menu-sub"
        className={cn(
            `
            mx-3.5
            flex
            min-w-0
            translate-x-px
            flex-col
            gap-1
            border-l
            border-sidebar-border
            px-2.5
            py-0.5
            group-data-[collapsible=icon]:group-data-[state=closed]:hidden
            `,
            className,
        )}
        {...props}
    />
);

