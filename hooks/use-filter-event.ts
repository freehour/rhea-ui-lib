import type { SyntheticEvent } from 'react';

import { useEventCallback } from './use-event-callback';


export type EventFilter<E extends SyntheticEvent = SyntheticEvent> = (event: E) => boolean;

export const eventOnCurrentTarget: EventFilter = event => event.currentTarget === event.target;


export function useFilterEvent<E extends SyntheticEvent, Args extends unknown[], R>(
    fn: (event: E, ...args: Args) => R,
    ...filters: EventFilter<E>[]
): (event: E, ...args: Args) => R | undefined {
    return useEventCallback<[E, ...Args], R | undefined>(
        (event, ...args) => filters.every(filter => filter(event)) ? fn(event, ...args) : undefined,
    );
}
