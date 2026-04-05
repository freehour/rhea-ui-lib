import { XIcon } from 'lucide-react';
import type { ComponentProps, FunctionComponent } from 'react';

import * as DialogPrimitive from '@radix-ui/react-dialog';

import { Button } from '@/components/button';
import { cn } from '@/utils/cn';

import { DialogOverlay } from './dialog-overlay';
import { DialogPortal } from './dialog-portal';


export interface DialogContentProps extends ComponentProps<typeof DialogPrimitive.Content> {
    showCloseButton?: boolean;
    closeLabel?: string;
}

export const DialogContent: FunctionComponent<DialogContentProps> = ({
    className,
    children,
    showCloseButton = true,
    closeLabel = 'Close',
    ...props
}) => (
    <DialogPortal data-slot="dialog-portal">
        <DialogOverlay />
        <DialogPrimitive.Content
            data-slot="dialog-content"
            className={cn(
                `
                fixed
                top-1/2
                left-1/2
                z-50
                grid
                w-full
                max-w-[calc(100%-2rem)]
                -translate-x-1/2
                -translate-y-1/2
                gap-4
                rounded-xl
                bg-background
                p-4
                text-sm
                ring-1
                ring-foreground/10
                duration-100
                outline-none
                data-[state=closed]:animate-out
                data-[state=closed]:fade-out-0
                data-[state=closed]:zoom-out-95
                data-[state=open]:animate-in
                data-[state=open]:fade-in-0
                data-[state=open]:zoom-in-95
                sm:max-w-sm
                `,
                className,
            )}
            {...props}
        >
            {children}
            {showCloseButton && (
                <DialogPrimitive.Close
                    data-slot="dialog-close"
                    asChild
                >
                    <Button
                        variant="ghost"
                        size="icon-sm"
                        className={cn(`
                            absolute
                            top-2
                            right-2
                        `)}
                    >
                        <XIcon />
                        <span className="sr-only">{closeLabel}</span>
                    </Button>
                </DialogPrimitive.Close>
            )}
        </DialogPrimitive.Content>
    </DialogPortal>
);
