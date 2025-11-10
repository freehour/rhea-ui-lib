import type { ComponentProps, FunctionComponent } from 'react';
import { ChevronUpIcon } from 'lucide-react';

import * as SelectPrimitive from '@radix-ui/react-select';

import { cn } from '@/utils/cn';


export interface SelectScrollUpButtonProps extends ComponentProps<typeof SelectPrimitive.ScrollUpButton> {}

export const SelectScrollUpButton: FunctionComponent<SelectScrollUpButtonProps> = ({
    className,
    ...props
}) => (
    <SelectPrimitive.ScrollUpButton
        data-slot="select-scroll-up-button"
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
        <ChevronUpIcon />
    </SelectPrimitive.ScrollUpButton>
);
