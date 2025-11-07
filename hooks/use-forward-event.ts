import type { EventHandler, SyntheticEvent } from 'react';

import { useEventCallback } from './use-event-callback';


export function useForwardEvent<E extends SyntheticEvent, Args extends unknown[], R>(
    handler: EventHandler<E> | undefined,
    fn: (event: E, ...args: Args) => R,
): (event: E, ...args: Args) => R {
    return useEventCallback<[E, ...Args], R>(
        (event, ...args) => {
            handler?.(event);
            return fn(event, ...args);
        },
    );
}
