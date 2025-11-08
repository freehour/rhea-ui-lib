import { useCallback, useState } from 'react';

import { useLatestCallback } from './use-latest-callback';


export function useControlled<T>(
    value: T | undefined,
    defaultValue: T,
    onChange?: (value: T) => void,
): [T, (value: T) => void] {
    const [state, setState] = useState<T>(defaultValue);

    const isControlled = value !== undefined;
    const onChangeRef = useLatestCallback(onChange);

    const setValue = useCallback(
        (newValue: T) => {
            if (!isControlled) {
                setState(newValue);
            }
            onChangeRef?.(newValue);
        },
        [isControlled, onChangeRef],
    );

    return [isControlled ? value : state, setValue];
}
