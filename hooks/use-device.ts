import { useEffect, useState } from 'react';


export interface Responsive<T = any> {
    desktop: T;
    mobile: T;
}

export type Device = keyof Responsive;


const MOBILE_BREAKPOINT = 768; // corresponds to md breakpoint in Tailwind CSS (do not change this value without updating css breakpoint)

/**
 * A hook that detects if the current device is treated as mobile based on the window width.
 * It listens for changes in the window size and updates the state accordingly.
 * This can be used to conditionally render components.
 * Note: To apply mobile styles, prefer CSS breakpoints instead.
 *
 * @returns A boolean indicating whether the current device is treated as mobile.
 */
export function useIsMobile(): boolean {
    // const [isMobile, setIsMobile] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < MOBILE_BREAKPOINT);

    useEffect(() => {
        const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
        const onChange = (): void => {
            setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
        };
        mql.addEventListener('change', onChange);
        // setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
        return () => mql.removeEventListener('change', onChange);
    }, []);

    return isMobile;
}

/**
 * A hook that returns the current device type based on the window width, which can be either 'mobile' or 'desktop'.
 * @returns The current device type ('mobile' or 'desktop').
 * @see useIsMobile for the underlying logic that determines if the device is treated as mobile.
 */
export function useDevice(): Device {
    const isMobile = useIsMobile();
    return isMobile ? 'mobile' : 'desktop';
}
