import { useState } from 'react';

import type { DebouncedState, UseDebounceCallbackOptions } from './use-debounce-callback';
import { useDebounceCallback } from './use-debounce-callback';

/**
 * Hook options.
 * @template T The type of the value.
 */
export interface UseDebounceStateOptions extends UseDebounceCallbackOptions {
}

/**
 * Custom hook that returns a debounced version of the provided value, along with a function to update it.
 * @template T The type of the value.
 * @param initialValue The initial value to be debounced.
 * @param delay The delay in milliseconds before the value is updated (default is 500ms).
 * @param options Optional configurations for the debouncing behavior.
 * @returns An array containing the debounced value and the function to update it.
 * @example
 * ```tsx
 * const [debouncedValue, updateDebouncedValue] = useDebounceState(inputValue, 500, { leading: true });
 * ```
 */
export function useDebounceState<T>(
    initialValue: T | (() => T),
    delay: number,
    options?: UseDebounceStateOptions,
): [T, DebouncedState<(value: T) => void>] {
    const [debouncedValue, setDebouncedValue] = useState(initialValue);

    const updateDebouncedValue = useDebounceCallback(
        setDebouncedValue,
        delay,
        options,
    );

    return [debouncedValue, updateDebouncedValue];
}
