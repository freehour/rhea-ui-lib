import type { ComponentProps, FunctionComponent } from 'react';

import { cn } from '@/utils/cn';


export interface SidebarFooterProps extends ComponentProps<'div'> {
}

export const SidebarFooter: FunctionComponent<SidebarFooterProps> = ({ className, ...props }) => (
    <div
        data-slot="sidebar-footer"
        data-sidebar="footer"
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
