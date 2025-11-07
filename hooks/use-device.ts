import { useEffect, useState } from 'react';

import type { Device } from '@/types/responsive';


const MOBILE_BREAKPOINT = 768; // corresponds to md breakpoint in Tailwind CSS (do not change this value without updating tailwind.css)

export function useIsMobile(): boolean {
    const [isMobile, setIsMobile] = useState<boolean>(false);

    useEffect(() => {
        const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
        const onChange = (): void => {
            setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
        };
        mql.addEventListener('change', onChange);
        setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
        return () => mql.removeEventListener('change', onChange);
    }, []);

    return isMobile;
}


export function useDevice(): Device {
    const isMobile = useIsMobile();
    return isMobile ? 'mobile' : 'desktop';
}
