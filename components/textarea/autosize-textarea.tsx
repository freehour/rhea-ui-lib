import type { CSSProperties } from 'react';
import { forwardRef, useCallback, useEffect, useRef, useState } from 'react';

import { useForwardEvent, useForwardRef } from '@/hooks';
import { cn } from '@/utils/cn';

import type { TextareaProps } from './textarea';
import { Textarea } from './textarea';


export interface AutosizeTextareaProps extends TextareaProps {
    /**
     * Maximum number of rows. If not specified, the textarea will grow indefinitely.
     */
    maxRows?: number;
}

export const AutosizeTextarea = forwardRef<HTMLTextAreaElement, AutosizeTextareaProps>(
    (
        {
            value,
            onChange,
            style,
            className,
            maxRows,
            ...props
        }: AutosizeTextareaProps,
        ref,
    ) => {
        const textareaRef = useForwardRef(ref);
        const [maxHeight, setMaxHeight] = useState<number | null>(null);
        const rowHeight = useRef(0);

        useEffect(() => {
            const textarea = textareaRef.current;
            if (textarea) {
                // Temporarily set to 1 row to measure height
                const { rows, value } = textarea;
                textarea.rows = 1;
                textarea.value = '';

                // Reset the height to 'auto' before measuring
                textarea.style.height = 'auto';

                // Measure the scrollHeight, which is the height of the content
                rowHeight.current = textarea.scrollHeight;

                // Restore
                textarea.rows = rows;
                textarea.value = value;
            }
        }, [textareaRef]);

        const resize = useCallback(() => {
            const textarea = textareaRef.current;
            if (textarea) {
                textarea.style.height = 'auto';
                const borderTopWidth = parseFloat(getComputedStyle(textarea).borderTopWidth);
                const borderBottomWidth = parseFloat(getComputedStyle(textarea).borderBottomWidth);
                const height = textarea.scrollHeight + borderTopWidth + borderBottomWidth;

                textarea.style.height = `${height}px`;
            }
        }, [textareaRef]);

        useEffect(() => setMaxHeight(maxRows !== undefined ? rowHeight.current * maxRows : null), [maxRows, rowHeight]);
        useEffect(resize, [resize, value]);

        return (
            <Textarea
                ref={textareaRef}
                style={{
                    maxHeight: `${maxHeight}px`,
                    ...style,
                } as CSSProperties}
                className={cn('resize-none', className)}
                value={value}
                onChange={useForwardEvent(onChange, resize)}
                {...props}
            />
        );
    },
);
AutosizeTextarea.displayName = 'AutosizeTextarea';
