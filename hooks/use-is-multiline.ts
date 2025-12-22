import type { RefObject } from 'react';
import { useEffect, useRef, useState } from 'react';


export interface UseIsMultilineReturnValue<Element extends HTMLElement = HTMLElement> {
    ref: RefObject<Element | null>;
    isMultiline: boolean | undefined;
}

export function useIsMultiline<Element extends HTMLElement>(): UseIsMultilineReturnValue<Element> {
    const ref = useRef<Element>(null);
    const [isMultiline, setIsMultiline] = useState<boolean | undefined>(undefined);

    useEffect(() => {
        const element = ref.current;
        if (!element) {
            return;
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
