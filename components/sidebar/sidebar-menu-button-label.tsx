import type { ComponentProps, FunctionComponent } from 'react';

import { cn } from '@/utils/cn';


export interface SidebarMenuButtonLabelProps extends ComponentProps<'span'> {}

export const SidebarMenuButtonLabel: FunctionComponent<SidebarMenuButtonLabelProps> = ({
    className,
    ...props
}) => (
    <span
        data-slot="sidebar-menu-button-label"
        data-sidebar="menu-button-label"
        className={cn(
            `
            text-sidebar-foreground
            transition-opacity
            duration-200
            ease-linear
            group-data-[collapsible=icon]:group-data-[state=closed]:opacity-0
            `,
            className,
        )}
        {...props}
    />
);
