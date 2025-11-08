import { useCallback } from 'react';

import { useLatest } from './use-latest';


export function useLatestCallback<Args extends unknown[], R>(
    fn: (...args: Args) => R,
): (...args: Args) => R;
export function useLatestCallback<Args extends unknown[], R>(
    fn: ((...args: Args) => R) | undefined,
): ((...args: Args) => R) | undefined;
export function useLatestCallback<Args extends unknown[], R>(
    fn: ((...args: Args) => R) | undefined,
): ((...args: Args) => R) | undefined {
    const ref = useLatest(fn);
    const callback = useCallback((...args: Args) => (ref.current as (...args: Args) => R)(...args), [ref]);
    return ref.current ? callback : undefined;
}
