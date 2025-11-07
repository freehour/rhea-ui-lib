import type { ComponentProps, FunctionComponent } from 'react';

import { Separator } from '@/components/separator/separator';
import { cn } from '@/utils/cn';


export interface SidebarSeparatorProps extends ComponentProps<typeof Separator> {
}

export const SidebarSeparator: FunctionComponent<SidebarSeparatorProps> = ({
    className,
    ...props
}) => (
    <Separator
        data-slot="sidebar-separator"
        data-sidebar="separator"
        className={cn('bg-sidebar-border/80', className)}
        {...props}
    />
);
