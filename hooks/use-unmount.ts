import { useEffect, useEffectEvent } from 'react';

/**
 * Custom hook that runs a cleanup function when the component is unmounted.
 * @param cleanup The cleanup function to be executed on unmount.
 * @example
 * ```tsx
 * useUnmount(() => {
 *   // Cleanup logic here
 * });
 * ```
 */
export function useUnmount(cleanup: () => void): void {
    const clean = useEffectEvent(cleanup);
    useEffect(() => clean, []);
}
