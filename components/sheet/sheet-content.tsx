import { cva } from 'class-variance-authority';
import { XIcon } from 'lucide-react';
import type { ComponentProps, FunctionComponent } from 'react';

import * as SheetPrimitive from '@radix-ui/react-dialog';

import { Button } from '@/components/button';
import type { VariantProps } from '@/types/variant';
import { cn } from '@/utils/cn';

import { SheetOverlay } from './sheet-overlay';
import { SheetPortal } from './sheet-portal';


const sheetContentVariants = cva(
    `
    fixed
    z-50
    flex
    flex-col
    gap-4
    bg-background
    bg-clip-padding
    text-sm
    shadow-lg
    transition
    duration-200
    ease-in-out
    data-[state=closed]:animate-out
    data-[state=closed]:fade-out-0
    data-[state=open]:animate-in
    data-[state=open]:fade-in-0
    `,
    {
        variants: {
            side: {
                right: `
                    inset-y-0
                    right-0
                    h-full
                    w-3/4
                    border-l
                    data-[state=closed]:slide-out-to-right-10
                    data-[state=open]:slide-in-from-right-10
                    sm:max-w-sm
                `,
                left: `
                    inset-y-0
                    left-0
                    h-full
                    w-3/4
                    border-r
                    data-[state=closed]:slide-out-to-left-10
                    data-[state=open]:slide-in-from-left-10
                    sm:max-w-sm
                `,
                top: `
                    inset-x-0
                    top-0
                    h-auto
                    border-b
                    data-[state=closed]:slide-out-to-top-10
                    data-[state=open]:slide-in-from-top-10
                `,
                bottom: `
                    inset-x-0
                    bottom-0
                    h-auto
                    border-t
                    data-[state=closed]:slide-out-to-bottom-10
                    data-[state=open]:slide-in-from-bottom-10
                `,
            },
        },
    },
);


export interface SheetContentProps extends ComponentProps<typeof SheetPrimitive.Content>, VariantProps<typeof sheetContentVariants> {
    closeLabel?: string;
    showCloseButton?: boolean;
}

export const SheetContent: FunctionComponent<SheetContentProps> = ({
    className,
    children,
    side = 'right',
    closeLabel = 'Close',
    showCloseButton = true,
    ...props
}) => (
    <SheetPortal>
        <SheetOverlay />
        <SheetPrimitive.Content
            data-slot="sheet-content"
            data-side={side}
            className={cn(sheetContentVariants({ side }), className)}
            {...props}
        >
            {children}
            {showCloseButton && (
                <SheetPrimitive.Close
                    data-slot="sheet-close"
                    asChild
                >
                    <Button
                        variant="ghost"
                        size="icon-sm"
                        className={`
                            absolute
                            top-3
                            right-3
                        `}
                    >
                        <XIcon />
                        <span className="sr-only">{closeLabel}</span>
                    </Button>
                </SheetPrimitive.Close>
            )}
        </SheetPrimitive.Content>
    </SheetPortal>
);

