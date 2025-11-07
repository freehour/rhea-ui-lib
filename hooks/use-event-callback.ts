import { useCallback, useLayoutEffect, useRef } from 'react';

/**
 * Custom hook that creates a memoized event callback.
 * @template Args - An array of argument types for the event callback.
 * @template R - The return type of the event callback.
 * @param fn The callback function.
 * @returns A memoized event callback function.
 * @example
 * ```tsx
 * const handleClick = useEventCallback((event) => {
 *   // Handle the event here
 * });
 * ```
 */
export function useEventCallback<Args extends unknown[], R>(
    fn: (...args: Args) => R,
): (...args: Args) => R;
export function useEventCallback<Args extends unknown[], R>(
    fn: ((...args: Args) => R) | undefined,
): ((...args: Args) => R) | undefined;
export function useEventCallback<Args extends unknown[], R>(
    fn: ((...args: Args) => R) | undefined,
): ((...args: Args) => R) | undefined {
    const ref = useRef<((...args: Args) => R) | undefined>(() => {
        throw new Error('Cannot call an event handler while rendering.');
    });

    useLayoutEffect(() => {
        ref.current = fn;
    }, [fn]);

    const callback = useCallback(
        (...args: Args) => (ref.current as (...args: Args) => R)(...args),
        [ref],
    );
    return ref.current ? callback : undefined;
}
