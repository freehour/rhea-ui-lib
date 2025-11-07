import type { ComponentProps, FunctionComponent } from 'react';

import { eventOnCurrentTarget, useFilterEvent } from '@/hooks/use-filter-event';
import { useForwardEvent } from '@/hooks/use-forward-event';
import { cn } from '@/utils/cn';

import { useSidebar } from './use-sidebar';


export interface SidebarContentProps extends ComponentProps<'div'> {
}

export const SidebarContent: FunctionComponent<SidebarContentProps> = ({ className, onClick, ...props }) => {
    const sidebar = useSidebar();
    return (
        <div
            data-slot="sidebar-content"
            data-sidebar="content"
            className={cn(
                `
                flex
                min-h-0
                flex-1
                flex-col
                overflow-auto
                group-data-[state=closed]:cursor-e-resize
                group-data-[collapsible=icon]:group-data-[state=closed]:overflow-hidden
                `,
                className,
            )}
            onClick={useForwardEvent(onClick, useFilterEvent(sidebar.open, eventOnCurrentTarget))}
            {...props}
        />
    );
};
