import type { ComponentProps, ReactNode } from 'react';
import { useCallback } from 'react';

import * as SelectPrimitive from '@radix-ui/react-select';

import type { OmitFrom } from '@/types/from';


export interface SelectProps<T> extends OmitFrom<
    ComponentProps<typeof SelectPrimitive.Root>,
    'value' | 'defaultValue' | 'onValueChange'
> {
    value?: T;
    defaultValue?: T;
    onValueChange?: (value: T) => void;
}

export const Select = <T,>({
    value,
    defaultValue,
    onValueChange,
    ...props
}: SelectProps<T>): ReactNode => {
    const json = {
        value: value === undefined ? undefined : JSON.stringify(value),
        defaultValue: defaultValue === undefined ? undefined : JSON.stringify(defaultValue),
        onValueChange: useCallback((value: string) => onValueChange?.(JSON.parse(value)), [onValueChange]),
    };
    return (
        <SelectPrimitive.Root
            value={json.value}
            defaultValue={json.defaultValue}
            onValueChange={json.onValueChange}
            data-slot="select"
            {...props}
        />
    );
};
