import type { CSSProperties } from 'react';
import { forwardRef, useCallback, useEffect, useImperativeHandle, useRef } from 'react';

import { useForwardEvent } from '@/hooks';
import { cn } from '@/utils/cn';

import type { TextareaProps } from './textarea';
import { Textarea } from './textarea';


export interface AutosizeTextareaProps extends TextareaProps {
    /**
     * Minimum height in tailwind spacing units.
     * @default 16 (4rem)
     */
    minHeight?: number;

    /**
     * Maximum height in tailwind spacing units.
     * If not provided, the textarea will grow indefinitely.
     */
    maxHeight?: number;
}

export const AutosizeTextarea = forwardRef<
    HTMLTextAreaElement,
    AutosizeTextareaProps
>(
    (
        {
            minHeight = 16,
            maxHeight,
            value,
            onChange,
            style,
            className,
            ...props
        }: AutosizeTextareaProps,
        ref,
    ) => {
        const textAreaRef = useRef<HTMLTextAreaElement>(null);

        const resize = useCallback(() => {
            if (textAreaRef.current) {
                const rootFontSize = parseFloat(
                    getComputedStyle(document.documentElement).fontSize,
                );

                const minHeightPx = minHeight * rootFontSize / 4;
                const maxHeightPx = maxHeight !== undefined
                    ? maxHeight * rootFontSize / 4
                    : undefined;

                textAreaRef.current.style.height = `${minHeightPx}px`;
                const { scrollHeight } = textAreaRef.current;
                if (maxHeightPx !== undefined && scrollHeight > maxHeightPx) {
                    textAreaRef.current.style.height = `${maxHeightPx}px`;
                } else {
                    textAreaRef.current.style.height = `${scrollHeight}px`;
                }
            }
        }, [minHeight, maxHeight]);

        // resize at initial render and when controlled value changes
        useEffect(resize, [resize, value]);

        useImperativeHandle(ref, () => textAreaRef.current ?? new HTMLTextAreaElement());

        return (
            <Textarea
                ref={textAreaRef}
                style={{
                    '--min-height': `${minHeight}`,
                    '--max-height': `${maxHeight}`,
                    ...style,
                } as CSSProperties}
                className={cn(
                    `
                    max-h-[calc(var(--spacing)*var(--max-height))]
                    min-h-[calc(var(--spacing)*var(--min-height))]
                    resize-none
                    `,
                    className,
                )}
                value={value}
                onChange={useForwardEvent(onChange, resize)}
                {...props}
            />
        );
    },
);
AutosizeTextarea.displayName = 'AutosizeTextarea';
