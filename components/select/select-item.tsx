import type { ComponentProps, FunctionComponent } from 'react';
import { CheckIcon } from 'lucide-react';

import * as SelectPrimitive from '@radix-ui/react-select';

import { cn } from '@/utils/cn';


export interface SelectItemProps extends ComponentProps<typeof SelectPrimitive.Item> {}

export const SelectItem: FunctionComponent<SelectItemProps> = ({
    className,
    children,
    ...props
}) => (
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
            [&_svg:not([class*='text-'])]:text-muted-foreground
            *:[span]:last:flex
            *:[span]:last:items-center
            *:[span]:last:gap-2
            `,
            className,
        )}
        {...props}
    >
        <span className="absolute right-2 flex size-3.5 items-center justify-center">
            <SelectPrimitive.ItemIndicator>
                <CheckIcon />
            </SelectPrimitive.ItemIndicator>
        </span>
        <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
    </SelectPrimitive.Item>
);
