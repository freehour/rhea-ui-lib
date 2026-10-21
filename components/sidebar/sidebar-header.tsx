import { cn } from 'cn';
import type { ComponentProps, FunctionComponent } from 'react';


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
            gap-2
            p-2
            `,
            className,
        )}
        {...props}
    />
);

