import type { ComponentProps, FunctionComponent } from 'react';

import * as SelectPrimitive from '@radix-ui/react-select';

import { cn } from '@/utils/cn';


export interface SelectLabelProps extends ComponentProps<typeof SelectPrimitive.Label> {}

export const SelectLabel: FunctionComponent<SelectLabelProps> = ({
    className,
    ...props
}) => (
    <SelectPrimitive.Label
        data-slot="select-label"
        className={cn(
            `
            px-2
            py-1.5
            text-xs
            text-muted-foreground
            `,
            className,
        )}
        {...props}
    />
);
