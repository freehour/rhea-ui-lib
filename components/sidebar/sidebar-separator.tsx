import type { FunctionComponent } from 'react';

import type { SeparatorProps } from '@/components/separator';
import { Separator } from '@/components/separator';
import { cn } from '@/utils/cn';


export interface SidebarSeparatorProps extends SeparatorProps {
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
