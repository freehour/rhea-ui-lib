import type { ComponentProps, FunctionComponent } from 'react';
import { ChevronUpIcon } from 'lucide-react';

import * as SelectPrimitive from '@radix-ui/react-select';

import { cn } from '@/utils/cn';


export interface SelectScrollUpButtonProps extends ComponentProps<typeof SelectPrimitive.ScrollUpButton> {
}

export const SelectScrollUpButton: FunctionComponent<SelectScrollUpButtonProps> = ({
    className,
    ...props
}) => (
    <SelectPrimitive.ScrollUpButton
        data-slot="select-scroll-up-button"
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
        <ChevronUpIcon />
    </SelectPrimitive.ScrollUpButton>
);
