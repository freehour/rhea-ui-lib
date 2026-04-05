import { cva } from 'class-variance-authority';
import type { ComponentProps, FunctionComponent, MouseEventHandler } from 'react';

import { useForwardEvent } from '@/hooks/use-forward-event';
import type { VariantProps } from '@/types/variant';
import { cn } from '@/utils/cn';


const inputGroupAddonVariants = cva(
    `
    flex
    h-auto
    cursor-text
    items-center
    justify-center
    gap-2
    py-1.5
    text-sm
    font-medium
    text-muted-foreground
    select-none
    group-data-[disabled=true]/input-group:opacity-50
    [&>kbd]:rounded-[calc(var(--radius)-5px)]
    [&>svg:not([class*='size-'])]:size-4
  `,
    {
        variants: {
            align: {
                'inline-start': `
                    order-first
                    pl-2
                    has-[>button]:ml-[-0.3rem]
                    has-[>kbd]:ml-[-0.15rem]
                `,
                'inline-end': `
                    order-last
                    pr-2
                    has-[>button]:mr-[-0.3rem]
                    has-[>kbd]:mr-[-0.15rem]
                `,
                'block-start': `
                    order-first
                    w-full
                    justify-start
                    px-2.5
                    pt-2
                `,
                'block-end': `
                    order-last
                    w-full
                    justify-start
                    px-2.5
                    pb-2
                `,
            },
        },
    },
);

export interface InputGroupAddonProps extends ComponentProps<'div'>, VariantProps<typeof inputGroupAddonVariants> {
}

export const InputGroupAddon: FunctionComponent<InputGroupAddonProps> = ({
    className,
    onClick,
    align = 'inline-start',
    ...props
}) => {
    const focusInput: MouseEventHandler = e => {
        if ((e.target as HTMLElement).closest('button')) {
            return;
        }
        e.currentTarget.parentElement?.querySelector('input')?.focus();
    };

    return (
        <div
            role="group"
            data-slot="input-group-addon"
            data-align={align}
            className={cn(inputGroupAddonVariants({ align }), className)}
            onClick={useForwardEvent(onClick, focusInput)}
            {...props}
        />
    );
};
