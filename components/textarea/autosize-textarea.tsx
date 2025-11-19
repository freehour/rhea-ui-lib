import type { CSSProperties } from 'react';
import { forwardRef, useCallback, useEffect, useState } from 'react';

import { useForwardEvent, useForwardRef } from '@/hooks';
import { cn } from '@/utils/cn';

import type { TextareaProps } from './textarea';
import { Textarea } from './textarea';


export interface AutosizeTextareaProps extends TextareaProps {
    /**
     * Maximum number of rows.
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

        const resize = useCallback(() => {
            const textarea = textareaRef.current;
            if (textarea) {
                textarea.style.height = 'auto';
                textarea.style.height = `${textarea.scrollHeight}px`;
            }
        }, [textareaRef]);

        const updateMaxHeight = useCallback(() => {
            const textarea = textareaRef.current;
            if (textarea) {
                textarea.style.height = 'auto';
                const singleRowHeight = textarea.scrollHeight;
                setMaxHeight(maxRows !== undefined ? singleRowHeight * maxRows : null);
            }
        }, [maxRows, textareaRef]);

        useEffect(updateMaxHeight, [updateMaxHeight]);
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
