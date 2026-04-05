import type { ComponentProps, FunctionComponent } from 'react';

import { useForwardEvent } from '@/hooks/use-forward-event';
import { cn } from '@/utils/cn';


export interface TextareaProps extends ComponentProps<'textarea'> {
    onValueChange?: (value: string) => void;
}

export const Textarea: FunctionComponent<TextareaProps> = ({
    onChange,
    onValueChange,
    rows = 3,
    className,
    ...props
}) => (
    <textarea
        onChange={useForwardEvent(onChange, event => onValueChange?.(event.target.value))}
        data-slot="textarea"
        className={cn(
            `
            flex
            field-sizing-content
            min-h-16
            w-full
            rounded-lg
            border
            border-input
            bg-transparent
            px-2.5
            py-2
            text-base
            transition-colors
            outline-none
            placeholder:text-muted-foreground
            focus-visible:border-ring
            focus-visible:ring-2
            focus-visible:ring-ring/50
            disabled:cursor-not-allowed
            disabled:bg-input/50
            disabled:opacity-50
            aria-invalid:border-destructive
            aria-invalid:ring-3
            aria-invalid:ring-destructive/20
            md:text-sm
            dark:bg-input/30
            dark:disabled:bg-input/80
            dark:aria-invalid:border-destructive/50
            dark:aria-invalid:ring-destructive/40
            `,
            className,
        )}
        rows={rows}
        {...props}
    />
);
