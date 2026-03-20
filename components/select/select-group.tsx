import type { ComponentProps, FunctionComponent } from 'react';

import * as SelectPrimitive from '@radix-ui/react-select';

import { cn } from '@/utils/cn';


export interface SelectGroupProps extends ComponentProps<typeof SelectPrimitive.Group> {
}

export const SelectGroup: FunctionComponent<SelectGroupProps> = ({
    className,
    ...props
}) => (
    <SelectPrimitive.Group
        data-slot="select-group"
        className={cn(
            `
            scroll-my-1
            p-1
            `,
            className,
        )}
        {...props}
    />
);
