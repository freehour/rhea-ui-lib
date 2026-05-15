import type { ComponentProps, FunctionComponent } from 'react';

import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';

import { cn } from '@/utils/cn';


export interface RadioGroupProps extends ComponentProps<typeof RadioGroupPrimitive.Root> {
}

export const RadioGroup: FunctionComponent<RadioGroupProps> = ({
    className,
    ...props
}) => (
    <RadioGroupPrimitive.Root
        data-slot="radio-group"
        className={cn(
            `
            grid
            w-full
            gap-2
            `,
            className,
        )}
        {...props}
    />
);
