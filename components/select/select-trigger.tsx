import { cva } from 'class-variance-authority';
import { ChevronDownIcon } from 'lucide-react';
import type { ComponentProps, FunctionComponent } from 'react';

import * as SelectPrimitive from '@radix-ui/react-select';

import { cn } from '@/utils/cn';


const selectTriggerVariants = cva(
    `
    flex
    w-fit
    items-center
    justify-between
    gap-1.5
    rounded-lg
    border
    border-input
    bg-transparent
    py-2
    pr-2
    pl-2.5
    text-sm
    whitespace-nowrap
    transition-colors
    outline-none
    select-none
    focus-visible:border-ring
    focus-visible:ring-2
    focus-visible:ring-ring/50
    disabled:cursor-not-allowed
    disabled:opacity-50
    aria-invalid:border-destructive
    aria-invalid:ring-3
    aria-invalid:ring-destructive/20
    data-placeholder:text-muted-foreground
    dark:bg-input/30
    dark:hover:bg-input/50
    dark:aria-invalid:border-destructive/50
    dark:aria-invalid:ring-destructive/40
    `,
    {
        variants: {
            size: {
                default: `
                    h-8
                `,
                sm: `
                    h-7
                    rounded-[min(var(--radius-md),10px)]
                `,
            },
        },
    },
);


export interface SelectTriggerProps extends ComponentProps<typeof SelectPrimitive.Trigger> {
    size?: 'sm' | 'default';
}

export const SelectTrigger: FunctionComponent<SelectTriggerProps> = ({
    className,
    size = 'default',
    children,
    ...props
}) => (
    <SelectPrimitive.Trigger
        data-slot="select-trigger"
        data-size={size}
        className={cn(selectTriggerVariants({ size }), className)}
        {...props}
    >
        {children}
        <SelectPrimitive.Icon asChild>
            <ChevronDownIcon
                className={`
                    pointer-events-none
                    size-4
                    text-muted-foreground
                `}
            />
        </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
);
