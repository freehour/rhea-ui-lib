import type { ComponentProps, FunctionComponent } from 'react';

import { eventOnCurrentTarget, useFilterEvent } from '@/hooks/use-filter-event';
import { useForwardEvent } from '@/hooks/use-forward-event';
import { cn } from '@/utils/cn';

import { useSidebar } from './use-sidebar';


export interface SidebarGroupProps extends ComponentProps<'div'> {
}

export const SidebarGroup: FunctionComponent<SidebarGroupProps> = ({ className, onClick, ...props }) => {
    const sidebar = useSidebar();
    return (
        <div
            data-slot="sidebar-group"
            data-sidebar="group"
            onClick={useForwardEvent(onClick, useFilterEvent(sidebar.open, eventOnCurrentTarget))}
            className={cn(
                `
                relative
                flex
                w-full
                min-w-0
                flex-col
                p-2
                `,
                className,
            )}
            {...props}
        />
    );
};
