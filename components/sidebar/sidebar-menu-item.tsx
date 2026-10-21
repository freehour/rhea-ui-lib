import { cn } from 'cn';
import type { ComponentProps, FunctionComponent } from 'react';


export interface SidebarMenuItemProps extends ComponentProps<'li'> {
}

export const SidebarMenuItem: FunctionComponent<SidebarMenuItemProps> = ({ className, ...props }) => (
    <li
        data-slot="sidebar-menu-item"
        data-sidebar="menu-item"
        className={cn(
            `
            group/menu-item
            relative
            `,
            className,
        )}
        {...props}
    />
);
