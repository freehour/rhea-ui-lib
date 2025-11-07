import type { ComponentProps, CSSProperties, FunctionComponent } from 'react';
import { useCallback, useMemo, useState } from 'react';
import { useHotkeys } from 'react-hotkeys-hook';

import { TooltipProvider } from '@/components/tooltip';
import type { Responsive } from '@/types/responsive';
import { cn } from '@/utils/cn';

import type { SidebarState } from './sidebar-context';
import { SidebarContext } from './sidebar-context';


const SIDEBAR_WIDTH = '16rem';
const SIDEBAR_WIDTH_ICON = '3rem';

function useSidebar(defaultIsOpen: boolean): SidebarState {
    const [isOpen, setIsOpen] = useState(defaultIsOpen);

    return {
        isOpen,
        toggle: useCallback(() => setIsOpen(prev => !prev), [setIsOpen]),
        setOpen: useCallback(open => setIsOpen(open), [setIsOpen]),
        open: useCallback(() => setIsOpen(true), [setIsOpen]),
        close: useCallback(() => setIsOpen(false), [setIsOpen]),
    };
}

export interface SidebarProviderProps extends ComponentProps<'div'> {
    isOpen?: Responsive<boolean>;
    shortcut?: string;
}

export const SidebarProvider: FunctionComponent<SidebarProviderProps> = ({
    isOpen = { desktop: true, mobile: true },
    shortcut,
    className,
    style,
    children,
    ...props
}) => {
    const desktopSidebar = useSidebar(isOpen.desktop);
    const mobileSidebar = useSidebar(isOpen.mobile);
    const sidebar = useMemo<SidebarContext>(() => ({
        desktop: desktopSidebar,
        mobile: mobileSidebar,
    }), [desktopSidebar, mobileSidebar]);

    useHotkeys(shortcut ?? '', desktopSidebar.toggle, { preventDefault: true, enabled: shortcut !== undefined });

    return (
        <SidebarContext.Provider value={sidebar}>
            <TooltipProvider delayDuration={0}>
                <div
                    data-slot="sidebar-wrapper"
                    style={
                        {
                            '--sidebar-width': SIDEBAR_WIDTH,
                            '--sidebar-width-icon': SIDEBAR_WIDTH_ICON,
                            ...style,
                        } as CSSProperties
                    }
                    className={cn(
                        `
                        group/sidebar-wrapper
                        flex
                        min-h-svh
                        w-full
                        has-data-[variant=inset]:bg-sidebar
                        `,
                        className,
                    )}
                    {...props}
                >
                    {children}
                </div>
            </TooltipProvider>
        </SidebarContext.Provider>
    );
};
