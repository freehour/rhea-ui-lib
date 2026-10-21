import { cn } from 'cn';
import type { ComponentProps, FunctionComponent } from 'react';


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
            gap-0
            `,
            className,
        )}
        {...props}
    />
);
