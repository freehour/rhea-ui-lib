import type { ComponentProps, FunctionComponent } from 'react';

import * as TooltipPrimitive from '@radix-ui/react-tooltip';

import { cn } from '@/utils/cn';


export interface TooltipContentProps extends ComponentProps<typeof TooltipPrimitive.Content> {
}

export const TooltipContent: FunctionComponent<TooltipContentProps> = ({
    className,
    sideOffset = 0,
    children,
    ...props
}) => (
    <TooltipPrimitive.Portal>
        <TooltipPrimitive.Content
            data-slot="tooltip-content"
            sideOffset={sideOffset}
            className={cn(
                `
                z-50
                inline-flex
                w-fit
                max-w-xs
                origin-(--radix-tooltip-content-transform-origin)
                items-center
                gap-1.5
                rounded-md
                bg-foreground
                px-3
                py-1.5
                text-xs
                text-background
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
                className,
            )}
            {...props}
        >
            {children}
            <TooltipPrimitive.Arrow
                className={cn(
                    `
                    z-50
                    size-2.5
                    translate-y-[calc(-50%-2px)]
                    rotate-45
                    rounded-[2px]
                    bg-foreground
                    fill-foreground
                    `,
                    className,
                )}
            />
        </TooltipPrimitive.Content>
    </TooltipPrimitive.Portal>
);

