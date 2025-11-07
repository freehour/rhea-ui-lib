import type { ComponentProps, FunctionComponent } from 'react';
import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';
import { XIcon } from 'lucide-react';

import * as SheetPrimitive from '@radix-ui/react-dialog';

import { cn } from '@/utils/cn';

import { SheetOverlay } from './sheet-overlay';
import { SheetPortal } from './sheet-portal';


const sheetContentVariants = cva(
    `
    fixed
    z-50
    flex flex-col gap-4
    bg-background shadow-lg
    transition ease-in-out
    data-[state=closed]:animate-out data-[state=closed]:duration-200
    data-[state=open]:animate-in data-[state=open]:duration-400
    `,
    {
        variants: {
            side: {
                right: `
                    inset-y-0 right-0
                    h-full w-3/4
                    border-l
                    data-[state=closed]:slide-out-to-right
                    data-[state=open]:slide-in-from-right
                    sm:max-w-sm
                `,
                left: `
                    inset-y-0 left-0
                    h-full w-3/4
                    border-r
                    data-[state=closed]:slide-out-to-left
                    data-[state=open]:slide-in-from-left
                    sm:max-w-sm
                `,
                top: `
                    inset-x-0 top-0
                    h-auto
                    border-b
                    data-[state=closed]:slide-out-to-top
                    data-[state=open]:slide-in-from-top
                `,
                bottom: `
                    inset-x-0 bottom-0
                    h-auto
                    border-t
                    data-[state=closed]:slide-out-to-bottom
                    data-[state=open]:slide-in-from-bottom
                `,
            },
        },
    },
);


export interface SheetContentProps extends ComponentProps<typeof SheetPrimitive.Content>, VariantProps<typeof sheetContentVariants> {
    closeLabel?: string;
}

export const SheetContent: FunctionComponent<SheetContentProps> = ({
    className,
    children,
    side = 'right',
    closeLabel = 'Close',
    ...props
}) => (
    <SheetPortal>
        <SheetOverlay />
        <SheetPrimitive.Content
            data-slot="sheet-content"
            className={cn(sheetContentVariants({ side }), className)}
            {...props}
        >
            {children}
            <SheetPrimitive.Close
                className={`
                    absolute
                    top-4
                    right-4
                    rounded-xs
                    opacity-70
                    ring-offset-background
                    transition-opacity
                    hover:opacity-100
                    focus:ring-2
                    focus:ring-ring
                    focus:ring-offset-2
                    focus:outline-hidden
                    disabled:pointer-events-none
                    data-[state=open]:bg-secondary
                `}
            >
                <XIcon className="size-4" />
                <span className="sr-only">{closeLabel}</span>
            </SheetPrimitive.Close>
        </SheetPrimitive.Content>
    </SheetPortal>
);

