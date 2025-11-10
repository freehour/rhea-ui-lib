import type { ComponentProps, FunctionComponent } from 'react';
import { ChevronDownIcon } from 'lucide-react';

import * as SelectPrimitive from '@radix-ui/react-select';

import { cn } from '@/utils/cn';


export interface SelectScrollDownButtonProps extends ComponentProps<typeof SelectPrimitive.ScrollDownButton> {}

export const SelectScrollDownButton: FunctionComponent<SelectScrollDownButtonProps> = ({
    className,
    ...props
}) => (
    <SelectPrimitive.ScrollDownButton
        data-slot="select-scroll-down-button"
        className={cn(
            `
            flex
            cursor-default
            items-center
            justify-center
            py-1
            `,
            className,
        )}
        {...props}
    >
        <ChevronDownIcon />
    </SelectPrimitive.ScrollDownButton>
);
