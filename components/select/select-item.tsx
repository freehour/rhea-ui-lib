import type { ComponentProps, ReactNode } from 'react';

import * as SelectPrimitive from '@radix-ui/react-select';

import type { OmitFrom } from '@/types/from';
import type { JSONValue } from '@/types/json';
import { cn } from '@/utils/cn';


export interface SelectItemProps<T> extends OmitFrom<ComponentProps<typeof SelectPrimitive.Item>, 'value'> {
    value: JSONValue<T>;
}

export const SelectItem = <T,>({
    className,
    value,
    ...props
}: SelectItemProps<T>): ReactNode => (
    <SelectPrimitive.Item
        data-slot="select-item"
        className={cn(
            `
            relative
            flex
            w-full
            cursor-default
            items-center
            gap-2
            rounded-sm
            py-1.5
            pr-8
            pl-2
            text-sm
            outline-hidden
            select-none
            focus:bg-accent
            focus:text-accent-foreground
            data-disabled:pointer-events-none
            data-disabled:opacity-50
            [&_svg]:pointer-events-none
            [&_svg]:shrink-0
            [&_svg:not([class*='size-'])]:size-4
            [&_svg:not([class*='text-'])]:text-muted-foreground
            *:[span]:last:flex
            *:[span]:last:items-center
            *:[span]:last:gap-2
            `,
            className,
        )}
        value={JSON.stringify(value)}
        {...props}
    />
);
