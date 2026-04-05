import type { RefObject } from 'react';
import { useEffect, useRef, useState } from 'react';


export interface UseIsMultilineReturnValue<Element extends HTMLElement = HTMLElement> {
    ref: RefObject<Element | null>;
    isMultiline: boolean | undefined;
}

/**
 * A custom hook that determines if the text content of a given element spans multiple lines.
 * It uses a ResizeObserver to monitor changes in the element's size and updates the multiline state accordingly.
 * @template Element The type of the HTML element to observe. Defaults to `HTMLElement`.
 * @returns An object containing a ref to be attached to the target element and a boolean state indicating whether the content is multiline.
 * @example
 * ```tsx
 * const { ref, isMultiline } = useIsMultiline();
 * return (
 *   <div ref={ref}>
 *     This is some text that may or may not be multiline.
 *   </div>
 * );
 * ```
 * @remarks
 * - The hook calculates the number of lines by dividing the content height (scrollHeight minus vertical padding) by the line height.
 * - If the line height or padding cannot be determined, the multiline state will be set to `undefined`.
 * - Ensure that the target element has a defined line height and padding.
 */
export function useIsMultiline<Element extends HTMLElement>(): UseIsMultilineReturnValue<Element> {
    const ref = useRef<Element>(null);
    const [isMultiline, setIsMultiline] = useState<boolean | undefined>(undefined);

    useEffect(() => {
        const element = ref.current;
        if (!element) {
            return undefined;
        }

        const check = (): void => {
            const styles = getComputedStyle(element);
            const lineHeight = parseFloat(styles.lineHeight);
            const paddingTop = parseFloat(styles.paddingTop);
            const paddingBottom = parseFloat(styles.paddingBottom);

            if (isNaN(lineHeight) || lineHeight === 0 || isNaN(paddingTop) || isNaN(paddingBottom)) {
                setIsMultiline(undefined);
            }

            const contentHeight = element.scrollHeight - paddingTop - paddingBottom;
            const lines = Math.round(contentHeight / lineHeight);
            setIsMultiline(lines > 1);
        };

        check();

        const observer = new ResizeObserver(check);
        observer.observe(element);

        return () => observer.disconnect();
    }, []);

    return { ref, isMultiline };
}
