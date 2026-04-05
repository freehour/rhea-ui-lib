import { CheckIcon } from 'lucide-react';
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
    children,
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
            gap-1.5
            rounded-md
            py-1
            pr-8
            pl-1.5
            text-sm
            outline-hidden
            select-none
            focus:bg-accent
            focus:text-accent-foreground
            data-disabled:pointer-events-none
            data-disabled:opacity-50
            [&_svg]:pointer-events-none
            [&_svg]:shrink-0
            `,
            className,
        )}
        value={JSON.stringify(value)}
        {...props}
    >
        <span
            className={`
                pointer-events-none
                absolute
                right-2
                flex
                size-4
                items-center
                justify-center
            `}
        >
            <SelectPrimitive.ItemIndicator>
                <CheckIcon className="pointer-events-none" />
            </SelectPrimitive.ItemIndicator>
        </span>
        <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
    </SelectPrimitive.Item>
);
