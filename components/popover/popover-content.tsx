import type { ComponentProps, FunctionComponent } from 'react';

import * as PopoverPrimitive from '@radix-ui/react-popover';

import { cn } from '@/utils/cn';


export interface PopoverContentProps extends ComponentProps<typeof PopoverPrimitive.Content> {
}

export const PopoverContent: FunctionComponent<PopoverContentProps> = ({
    className,
    align = 'center',
    sideOffset = 4,
    ...props
}) => (
    <PopoverPrimitive.Portal>
        <PopoverPrimitive.Content
            data-slot="popover-content"
            align={align}
            sideOffset={sideOffset}
            className={cn(
                `
                z-50
                flex
                w-72
                origin-(--radix-popover-content-transform-origin)
                flex-col
                gap-2.5
                rounded-lg
                bg-popover
                p-2.5
                text-sm
                text-popover-foreground
                shadow-md
                ring-1
                ring-foreground/10
                outline-hidden
                duration-100
                data-[side=bottom]:slide-in-from-top-2
                data-[side=left]:slide-in-from-right-2
                data-[side=right]:slide-in-from-left-2
                data-[side=top]:slide-in-from-bottom-2
                data-[state=closed]:animate-out
                data-[state=closed]:fade-out-0
                data-[state=closed]:zoom-out-95
                data-[state=open]:animate-in
                data-[state=open]:fade-in-0
                data-[state=open]:zoom-in-95
                `,
                className,
            )}
            {...props}
        />
    </PopoverPrimitive.Portal>
);
