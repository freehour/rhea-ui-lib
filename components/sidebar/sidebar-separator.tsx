import { cn } from 'cn';
import type { FunctionComponent } from 'react';

import type { SeparatorProps } from '@/components/separator';
import { Separator } from '@/components/separator';


export interface SidebarSeparatorProps extends SeparatorProps {
}

export const SidebarSeparator: FunctionComponent<SidebarSeparatorProps> = ({
    className,
    ...props
}) => (
    <Separator
        data-slot="sidebar-separator"
        data-sidebar="separator"
        className={cn(
            `
            mx-2
            w-auto
            bg-sidebar-border
            `,
            className,
        )}
        {...props}
    />
);
