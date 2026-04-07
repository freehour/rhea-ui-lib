import type { EventHandler, SyntheticEvent } from 'react';

import { useLatestCallback } from './use-latest-callback';


/**
 * Forwards an event to a handler while also executing a function.
 * This is useful for cases where you want to execute some logic in response to an event, but also want to allow the parent component to handle the event as well.
 *
 * Note: The returned function will have a stable identity. If this is not what you want, use `useForwardCallback` instead.
 *
 * @param handler The event handler from the parent component.
 * @param fn The function to execute in response to the event.
 * @returns A function that forwards the event to the handler and executes the function.
 * @example
 * ```tsx
 * const LogButton: FunctionComponent<{ onClick: EventHandler<MouseEvent> }> = ({ onClick }) => (
 *      <button onClick={useForwardEvent(onClick, console.log)}>
 *          Logs Every Click
 *      </button>
 * );
 * ```
 */
export function useForwardEvent<E extends SyntheticEvent, Args extends unknown[], R>(
    handler: EventHandler<E> | undefined,
    fn: (event: E, ...args: Args) => R,
): (event: E, ...args: Args) => R {
    return useLatestCallback(
        (event, ...args) => {
            handler?.(event);
            return fn(event, ...args);
        },
    );
}
