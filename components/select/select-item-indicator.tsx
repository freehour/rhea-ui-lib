import type { ComponentProps, FunctionComponent } from 'react';
import { CheckIcon } from 'lucide-react';

import * as SelectPrimitive from '@radix-ui/react-select';

import type { OmitFrom } from '@/types/from';
import { cn } from '@/utils';


export interface SelectItemIndicatorProps extends OmitFrom<ComponentProps<'span'>, 'children'> {
}

export const SelectItemIndicator: FunctionComponent<SelectItemIndicatorProps> = ({
    className,
    ...props
}) => (
    <span
        className={cn(
            `
            absolute
            right-2
            flex
            size-3.5
            items-center
            justify-center
            `,
            className,
        )}
        {...props}
    >
        <SelectPrimitive.ItemIndicator>
            <CheckIcon />
        </SelectPrimitive.ItemIndicator>
    </span>
);
