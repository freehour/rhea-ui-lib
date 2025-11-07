import { createContext } from 'react';

import type { Responsive } from '@/types/responsive';


export interface SidebarState {
    isOpen: boolean;
    toggle: () => void;
    setOpen: (open: boolean) => void;
    open: () => void;
    close: () => void;
}

export interface SidebarContext extends Responsive<SidebarState> {
}

export const SidebarContext = createContext<SidebarContext | null>(null);

