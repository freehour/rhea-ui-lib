import type { ComponentProps, FunctionComponent } from 'react';

import { cn } from '@/utils/cn';

import { useSidebar } from './use-sidebar';


export interface SidebarRailProps extends ComponentProps<'button'> {
}

export const SidebarRail: FunctionComponent<SidebarRailProps> = ({ className, ...props }) => {
    const sidebar = useSidebar('desktop');

    return (
        <button
            type="button"
            data-sidebar="rail"
            data-slot="sidebar-rail"
            aria-label="Toggle Sidebar"
            tabIndex={-1}
            onClick={sidebar.toggle}
            title="Toggle Sidebar"
            className={cn(
                `
                absolute
                inset-y-0
                z-20
                hidden
                w-4
                -translate-x-1/2
                transition-all
                ease-linear
                group-data-[side=left]:-right-4
                group-data-[side=right]:left-0
                group-data-[collapsible=offcanvas]:group-data-[state=closed]:translate-x-0
                after:absolute
                after:inset-y-0
                after:left-1/2
                after:w-0.5
                group-data-[collapsible=offcanvas]:group-data-[state=closed]:after:left-full
                hover:group-data-[collapsible=offcanvas]:group-data-[state=closed]:bg-sidebar
                hover:after:bg-sidebar-border
                in-data-[side=left]:cursor-w-resize
                in-data-[side=right]:cursor-e-resize
                sm:flex
                [[data-side=left][data-collapsible=offcanvas]_&]:-right-2
                [[data-side=left][data-state=closed]_&]:cursor-e-resize
                [[data-side=right][data-collapsible=offcanvas]_&]:-left-2
                [[data-side=right][data-state=closed]_&]:cursor-w-resize
                `,
                className,
            )}
            {...props}
        />
    );
};
