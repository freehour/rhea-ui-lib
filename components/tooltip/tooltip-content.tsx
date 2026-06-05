import { cva } from 'class-variance-authority';
import type { ComponentProps, FunctionComponent } from 'react';

import * as TooltipPrimitive from '@radix-ui/react-tooltip';

import type { VariantProps } from '@/types/variant';
import { cn } from '@/utils/cn';


const tooltipContentVariants = cva(
    `
    z-50
    inline-flex
    w-fit
    max-w-xs
    origin-(--radix-tooltip-content-transform-origin)
    items-center
    gap-1.5
    rounded-md
    px-3
    py-1.5
    text-xs
    has-data-[slot=kbd]:pr-1.5
    data-[side=bottom]:slide-in-from-top-2
    data-[side=left]:slide-in-from-right-2
    data-[side=right]:slide-in-from-left-2
    data-[side=top]:slide-in-from-bottom-2
    **:data-[slot=kbd]:relative
    **:data-[slot=kbd]:isolate
    **:data-[slot=kbd]:z-50
    **:data-[slot=kbd]:rounded-sm
    data-[state=closed]:animate-out
    data-[state=closed]:fade-out-0
    data-[state=closed]:zoom-out-95
    data-[state=delayed-open]:animate-in
    data-[state=delayed-open]:fade-in-0
    data-[state=delayed-open]:zoom-in-95
    data-[state=open]:animate-in
    data-[state=open]:fade-in-0
    data-[state=open]:zoom-in-95
    `,
    {
        variants: {
            variant: {
                default: `
                    bg-foreground
                    text-background
                `,
                destructive: `
                    bg-destructive
                    text-background
                `,
            },
        },
    },
);

const tooltipArrowVariants = cva(
    `
    z-50
    size-2.5
    translate-y-[calc(-50%-2px)]
    rotate-45
    rounded-[2px]
    `,
    {
        variants: {
            variant: {
                default: `
                    bg-foreground
                    fill-foreground
                `,
                destructive: `
                    bg-destructive
                    fill-destructive
                `,
            },
        },
    },
);

export interface TooltipContentProps extends ComponentProps<typeof TooltipPrimitive.Content>, VariantProps<typeof tooltipContentVariants> {}

export const TooltipContent: FunctionComponent<TooltipContentProps> = ({
    className,
    variant = 'default',
    sideOffset = 0,
    children,
    ...props
}) => (
    <TooltipPrimitive.Portal>
        <TooltipPrimitive.Content
            data-slot="tooltip-content"
            data-variant={variant}
            sideOffset={sideOffset}
            className={cn(
                tooltipContentVariants({ variant }),
                className,
            )}
            {...props}
        >
            {children}
            <TooltipPrimitive.Arrow
                className={cn(
                    tooltipArrowVariants({ variant }),
                    className,
                )}
            />
        </TooltipPrimitive.Content>
    </TooltipPrimitive.Portal>
);

