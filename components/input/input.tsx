import type { ComponentProps, FunctionComponent } from 'react';
import { useMemo } from 'react';

import { useForwardEvent } from '@/hooks/use-forward-event';
import type { OmitFrom } from '@/types/from';
import { cn } from '@/utils/cn';


export interface InputProps extends OmitFrom<ComponentProps<'input'>, 'value' | 'defaultValue'> {
    value?: string | Date | number;
    defaultValue?: string | Date | number;
    onValueChange?: (value: string, { valueAsNumber, valueAsDate }: { valueAsNumber: number; valueAsDate: Date | null }) => void;
    onValueAsNumberChange?: (value: number) => void;
    onValueAsDateChange?: (value: Date) => void;
}

export const Input: FunctionComponent<InputProps> = ({
    onChange,
    onValueChange,
    onValueAsNumberChange,
    onValueAsDateChange,
    type,
    value,
    defaultValue,
    className,
    ...props
}) => {
    const getRawValue = (value: string | Date | number | undefined): string | number | undefined => {
        if (value instanceof Date) {
            return value.toISOString();
        }
        if (typeof value === 'number') {
            return value;
        }
        return value;
    };

    const rawValue = useMemo(() => getRawValue(value), [value]);
    const rawDefaultValue = useMemo(() => getRawValue(defaultValue), [defaultValue]);

    return (
        <input
            value={rawValue}
            defaultValue={rawDefaultValue}
            onChange={useForwardEvent(onChange, event => {
                const { value, valueAsNumber, valueAsDate } = event.target;
                onValueChange?.(value, { valueAsNumber, valueAsDate });
                if (!isNaN(valueAsNumber)) {
                    onValueAsNumberChange?.(valueAsNumber);
                }
                if (valueAsDate !== null) {
                    onValueAsDateChange?.(valueAsDate);
                }
            })}
            data-slot="input"
            className={cn(
                `
                h-8
                w-full
                min-w-0
                rounded-lg
                border
                border-input
                bg-transparent
                px-2.5
                py-1
                text-base
                transition-colors
                outline-none
                file:inline-flex
                file:h-6
                file:border-0
                file:bg-transparent
                file:text-sm
                file:font-medium
                file:text-foreground
                placeholder:text-muted-foreground
                focus-visible:border-ring
                focus-visible:ring-2
                focus-visible:ring-ring/50
                disabled:pointer-events-none
                disabled:cursor-not-allowed
                disabled:bg-input/50
                disabled:opacity-50
                aria-invalid:border-destructive
                aria-invalid:ring-2
                aria-invalid:ring-destructive/20
                md:text-sm
                dark:bg-input/30
                dark:disabled:bg-input/80
                dark:aria-invalid:border-destructive/50
                dark:aria-invalid:ring-destructive/40
                `,
                className,
            )}
            {...props}
        />
    );
};
