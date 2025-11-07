import type { ComponentProps, FunctionComponent } from 'react';

import { cn } from '@/utils/cn';


export interface SidebarMenuSubItemProps extends ComponentProps<'li'> {
}

export const SidebarMenuSubItem: FunctionComponent<SidebarMenuSubItemProps> = ({
    className,
    ...props
}) => (
    <li
        data-slot="sidebar-menu-sub-item"
        data-sidebar="menu-sub-item"
        className={cn(
            `
            group/menu-sub-item
            relative
            `,
            className,
        )}
        {...props}
    />
);
