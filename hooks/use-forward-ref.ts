import type { ForwardedRef, RefObject } from 'react';
import { useImperativeHandle, useRef } from 'react';


export function useForwardRef<T>(
    forwardedRef: ForwardedRef<T>,
): RefObject<T | null> {
    const internalRef = useRef<T | null>(null);

    useImperativeHandle(forwardedRef, () => {
        if (internalRef.current === null) {
            throw new Error('Internal ref is null');
        }
        return internalRef.current;
    }, [internalRef]);

    return internalRef;
}
