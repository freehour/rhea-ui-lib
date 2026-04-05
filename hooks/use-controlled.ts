import { useCallback, useState } from 'react';

import { useLatestCallback } from './use-latest-callback';


export interface Controlled<T> {
    value?: T;
    defaultValue?: T;
    onChange?: (value: T) => void;
}

/**
 * A hook that manages a controlled or uncontrolled state.
 * Most interactive components can have their state controlled by the parent component or manage it internally.
 * This hook provides a way to handle both scenarios seamlessly.
 * If a `value` is provided, the component is controlled and relies on the parent to manage its state.
 * If no `value` is provided, it falls back to using internal state initialized with `defaultValue`.
 *
 * @param value The controlled value.
 * @param defaultValue The default value for uncontrolled state.
 * @param onChange Callback fired when the value changes.
 * @returns A tuple with the current value and a setter function.
 */
export function useControlled<T>(
    value: T | undefined,
    defaultValue: T,
    onChange: (value: T) => void = () => {},
): [T, (value: T) => void] {
    const [state, setState] = useState(defaultValue);

    const isControlled = value !== undefined;
    const onChangeRef = useLatestCallback(onChange);

    const setValue = useCallback(
        (newValue: T) => {
            if (!isControlled) {
                setState(newValue);
            }
            onChangeRef(newValue);
        },
        [isControlled, onChangeRef],
    );

    return [isControlled ? value : state, setValue];
}
