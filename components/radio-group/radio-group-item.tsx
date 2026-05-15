import type { ComponentProps, FunctionComponent } from 'react';

import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';

import { cn } from '@/utils/cn';


export interface RadioGroupItemProps extends ComponentProps<typeof RadioGroupPrimitive.Item> {
}

export const RadioGroupItem: FunctionComponent<RadioGroupItemProps> = ({
    className,
    ...props
}) => (
    <RadioGroupPrimitive.Item
        data-slot="radio-group-item"
        className={cn(
            `
            group/radio-group-item
            peer
            relative
            flex
            aspect-square
            size-4
            shrink-0
            rounded-full
            border
            border-input
            outline-none
            after:absolute
            after:-inset-x-3
            after:-inset-y-2
            focus-visible:border-ring
            focus-visible:ring-3
            focus-visible:ring-ring/50
            disabled:cursor-not-allowed
            disabled:opacity-50
            aria-invalid:border-destructive
            aria-invalid:ring-3
            aria-invalid:ring-destructive/20
            aria-invalid:aria-checked:border-primary
            data-checked:border-primary
            data-checked:bg-primary
            data-checked:text-primary-foreground
            dark:bg-input/30
            dark:aria-invalid:border-destructive/50
            dark:aria-invalid:ring-destructive/40
            dark:data-checked:bg-primary
            `,
            className,
        )}
        {...props}
    >
        <RadioGroupPrimitive.Indicator
            data-slot="radio-group-indicator"
            className={`
                flex
                size-4
                items-center
                justify-center
            `}
        >
            <span
                className={`
                    absolute
                    top-1/2
                    left-1/2
                    size-2
                    -translate-x-1/2
                    -translate-y-1/2
                    rounded-full
                    bg-primary-foreground
                `}
            />
        </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
);
