import type { ComponentProps, FunctionComponent } from 'react';

import { cn } from '@/utils/cn';


export interface SidebarMenuBadgeProps extends ComponentProps<'div'> {
}

export const SidebarMenuBadge: FunctionComponent<SidebarMenuBadgeProps> = ({
    className,
    ...props
}: ComponentProps<'div'>) => (
    <div
        data-slot="sidebar-menu-badge"
        data-sidebar="menu-badge"
        className={cn(
            `
            pointer-events-none
            absolute
            right-1
            flex
            h-5
            min-w-5
            items-center
            justify-center
            rounded-md px-1
            text-xs
            font-medium
            text-sidebar-foreground
            tabular-nums
            select-none
            group-data-[collapsible=icon]:group-data-[state=closed]:hidden
            peer-hover/menu-button:text-sidebar-accent-foreground
            peer-data-[active=true]/menu-button:text-sidebar-accent-foreground
            peer-data-[size=default]/menu-button:top-1.5
            peer-data-[size=lg]/menu-button:top-2.5
            peer-data-[size=sm]/menu-button:top-1
            `,
            className,
        )}
        {...props}
    />
);
