import type { ComponentProps, FunctionComponent } from 'react';
import { cva } from 'class-variance-authority';

import * as SelectPrimitive from '@radix-ui/react-select';

import { cn } from '@/utils/cn';

import { SelectScrollDownButton } from './select-scroll-down-button';
import { SelectScrollUpButton } from './select-scroll-up-button';


const selectContentVariants = cva(
    `
    relative
    z-50
    max-h-(--radix-select-content-available-height)
    min-w-32
    origin-(--radix-select-content-transform-origin)
    overflow-x-hidden
    overflow-y-auto
    rounded-md
    border
    bg-popover
    text-popover-foreground
    shadow-md
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
    {
        variants: {
            position: {
                'popper': `
                    data-[side=bottom]:translate-y-1
                    data-[side=left]:-translate-x-1
                    data-[side=right]:translate-x-1
                    data-[side=top]:-translate-y-1
                `,
                'item-aligned': '',
            },
        },
    },
);

const selectViewportVariants = cva(
    `
    p-1
    `,
    {
        variants: {
            position: {
                'popper': `
                    h-(--radix-select-trigger-height)
                    w-full
                    min-w-(--radix-select-trigger-width)
                    scroll-my-1
                `,
                'item-aligned': '',
            },
        },
    },
);

export interface SelectContentProps extends ComponentProps<typeof SelectPrimitive.Content> {
}

export const SelectContent: FunctionComponent<SelectContentProps> = ({
    className,
    children,
    position = 'popper',
    align = 'center',
    ...props
}) => (
    <SelectPrimitive.Portal>
        <SelectPrimitive.Content
            data-slot="select-content"
            className={cn(selectContentVariants({ position }), className)}
            position={position}
            align={align}
            {...props}
        >
            <SelectScrollUpButton />
            <SelectPrimitive.Viewport
                className={cn(selectViewportVariants({ position }))}
            >
                {children}
            </SelectPrimitive.Viewport>
            <SelectScrollDownButton />
        </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
);
