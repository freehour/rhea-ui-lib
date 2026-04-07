import { useCallback } from 'react';


/**
 * Forwards a callback while also executing a function.
 * This is useful for cases where you want to execute some logic in response to a callback, but also want to allow the parent component to handle the callback as well.
 *
 * Note: The returned function's identity will change whenever the `callback` or `fn` changes.
 * If you want a stable identity for event handlers, use `useForwardEvent` instead.
 *
 * @param callback The callback from the parent component.
 * @param fn The function to execute in response to the callback.
 * @returns A function that forwards the callback and executes the function.
 * @example
 * ```tsx
 * const LogInput: FunctionComponent<{ onValueChange: (value: string) => void }> = ({ onValueChange }) => (
 *      <Input onValueChange={useForwardCallback(onValueChange, console.log)} />
 * );
 * ```
 */
export function useForwardCallback<Args extends unknown[], R>(
    callback: ((...args: Args) => R) | undefined,
    fn: (...args: Args) => R,
): (...args: Args) => R {
    return useCallback(
        (...args) => {
            callback?.(...args);
            return fn(...args);
        },
        [callback, fn],
    );
}
