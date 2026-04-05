import type { Ref, RefObject } from 'react';
import { useImperativeHandle, useRef } from 'react';


/**
 * Allows to access a ref while also forwarding it.
 * @param ref The ref from the parent component to be forwarded.
 * @returns The internal ref that can be used within the component, and is also forwarded to the parent.
 * @example
 * ```tsx
 * const MyComponent: FunctionComponent<{ ref: Ref<HTMLDivElement> }> = ({ ref }) => {
 *      const internalRef = useForwardRef(ref);
 *      // do something with internalRef, e.g. access DOM methods....
 *
 *      return <div ref={internalRef}>Hello</div>;
 * }
 * ```
 */
export function useForwardRef<T>(
    ref: Ref<T> | undefined,
): RefObject<T | null> {
    const internalRef = useRef<T | null>(null);

    useImperativeHandle(ref, () => {
        if (internalRef.current === null) {
            throw new Error('Internal ref is null');
        }
        return internalRef.current;
    }, [internalRef]);

    return internalRef;
}
