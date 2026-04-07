import { useCallback, useLayoutEffect, useRef } from 'react';

/**
 * Returns a memoized version of the provided callback function that always has the latest reference to the original function.
 * The returned function will keep a stable identity throughout the component's lifetime.
 * You rarely need to use this hook directly. It is primarily intended for custom hooks working with event callbacks.
 * In most cases, you should prefer `useCallback`.
 *
 * It's important to note that the callback is not intended to be called during the render phase, e.g. from a `useEffect`.
 * If this is what you want use `useEffectEvent` instead.
 * When passing the callback as a prop, make sure that the child component does not rely on the identity of the callback.
 * For event handlers this is usually the case.
 *
 * @param fn The callback function to be memoized.
 * @returns A memoized version of the callback function.
 */
export function useLatestCallback<Args extends unknown[], R>(
    fn: (...args: Args) => R,
): (...args: Args) => R {
    const ref = useRef(fn);
    useLayoutEffect(() => {
        ref.current = fn;
    });
    const callback = useCallback((...args: Args) => ref.current(...args), []);
    return callback;
}
