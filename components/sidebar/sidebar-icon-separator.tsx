import type { FunctionComponent } from 'react';

import { cn } from '@/utils/cn';

import type { SidebarSeparatorProps } from './sidebar-separator';
import { SidebarSeparator } from './sidebar-separator';


export interface SidebarIconSeparatorProps extends SidebarSeparatorProps {
}

export const SidebarIconSeparator: FunctionComponent<SidebarIconSeparatorProps> = ({
    className,
    ...props
}) => (
    <SidebarSeparator
        className={cn(
            `
            transition-opacity
            duration-200
            ease-linear
            group-data-[state=open]:opacity-0
            `,
            className,
        )}
        {...props}
    />
);
