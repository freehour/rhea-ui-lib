import type { ComponentProps, FunctionComponent } from 'react';
import { XIcon } from 'lucide-react';

import * as DialogPrimitive from '@radix-ui/react-dialog';

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
                top-[50%]
                left-[50%]
                z-50
                grid
                w-full
                max-w-[calc(100%-2rem)]
                translate-x-[-50%]
                translate-y-[-50%]
                gap-4
                rounded-lg
                border
                bg-background
                p-6
                shadow-lg
                duration-200
                data-[state=closed]:animate-out
                data-[state=closed]:fade-out-0
                data-[state=closed]:zoom-out-95
                data-[state=open]:animate-in
                data-[state=open]:fade-in-0
                data-[state=open]:zoom-in-95
                sm:max-w-lg
                `,
                className,
            )}
            {...props}
        >
            {children}
            {showCloseButton && (
                <DialogPrimitive.Close
                    data-slot="dialog-close"
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
                        data-[state=open]:bg-accent
                        data-[state=open]:text-muted-foreground
                        [&_svg]:pointer-events-none
                        [&_svg]:shrink-0
                        [&_svg:not([class*='size-'])]:size-4
                    `}
                >
                    <XIcon />
                    <span className="sr-only">{closeLabel}</span>
                </DialogPrimitive.Close>
            )}
        </DialogPrimitive.Content>
    </DialogPortal>
);
