import type { SyntheticEvent } from 'react';

import { useLatestCallback } from './use-latest-callback';


export type EventFilter<E extends SyntheticEvent = SyntheticEvent> = (event: E) => boolean;

export const eventOnCurrentTarget: EventFilter = event => event.currentTarget === event.target;

/**
 * A hook that filters events based on the provided filters before invoking the callback function.
 * @param fn The callback function to be invoked if all filters pass.
 * @param filters An array of event filters to apply.
 * @returns A function that will invoke the callback only if all filters pass.
 */
export function useFilterEvent<E extends SyntheticEvent, Args extends unknown[], R>(
    fn: (event: E, ...args: Args) => R,
    ...filters: EventFilter<E>[]
): (event: E, ...args: Args) => R | undefined {
    return useLatestCallback<[E, ...Args], R | undefined>(
        (event, ...args) => filters.every(filter => filter(event)) ? fn(event, ...args) : undefined,
    );
}
