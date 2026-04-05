import { ChevronDownIcon } from 'lucide-react';
import type { ComponentProps, FunctionComponent } from 'react';

import * as SelectPrimitive from '@radix-ui/react-select';

import { cn } from '@/utils/cn';


export interface SelectScrollDownButtonProps extends ComponentProps<typeof SelectPrimitive.ScrollDownButton> {
}

export const SelectScrollDownButton: FunctionComponent<SelectScrollDownButtonProps> = ({
    className,
    ...props
}) => (
    <SelectPrimitive.ScrollDownButton
        data-slot="select-scroll-down-button"
        className={cn(
            `
            z-10
            flex
            cursor-default
            items-center
            justify-center
            bg-popover
            py-1
            [&_svg:not([class*='size-'])]:size-4
            `,
            className,
        )}
        {...props}
    >
        <ChevronDownIcon />
    </SelectPrimitive.ScrollDownButton>
);
