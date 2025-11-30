import { useContext } from 'react';

import { useDevice } from '@/hooks/use-device';
import type { Device } from '@/types/responsive';

import type { SidebarState } from './sidebar-context';
import { SidebarContext } from './sidebar-context';


export function useSidebarContextValue(): SidebarContext | null {
    return useContext(SidebarContext);
}

export function useSidebarContext(): SidebarContext {
    const context = useSidebarContextValue();
    if (!context) {
        throw new Error('useSidebarContext must be used within SidebarProvider');
    }
    return context;
}

export function useSidebar(device?: Device): SidebarState {
    const context = useSidebarContext();
    const currentDevice = useDevice();
    return context[device ?? currentDevice];
}

