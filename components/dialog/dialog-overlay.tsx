import type { ComponentProps, FunctionComponent } from 'react';

import * as DialogPrimitive from '@radix-ui/react-dialog';

import { cn } from '@/utils/cn';


export interface DialogOverlayProps extends ComponentProps<typeof DialogPrimitive.Overlay> {
}

export const DialogOverlay: FunctionComponent<DialogOverlayProps> = ({
    className,
    ...props
}) => (
    <DialogPrimitive.Overlay
        data-slot="dialog-overlay"
        className={cn(
            `
            fixed
            inset-0
            z-50
            bg-black/50
            data-[state=closed]:animate-out
            data-[state=closed]:fade-out-0
            data-[state=open]:animate-in
            data-[state=open]:fade-in-0
            `,
            className,
        )}
        {...props}
    />
);
