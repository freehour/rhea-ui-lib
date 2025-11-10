import type { ComponentProps, FunctionComponent } from 'react';

import * as SelectPrimitive from '@radix-ui/react-select';

import { cn } from '@/utils/cn';


export interface SelectSeparatorProps extends ComponentProps<typeof SelectPrimitive.Separator> {}

export const SelectSeparator: FunctionComponent<SelectSeparatorProps> = ({
    className,
    ...props
}) => (
    <SelectPrimitive.Separator
        data-slot="select-separator"
        className={cn(
            `
            pointer-events-none
            -mx-1
            my-1
            h-px
            bg-border
            `,
            className,
        )}
        {...props}
    />
);
