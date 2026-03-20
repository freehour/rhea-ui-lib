import type { ComponentProps, FunctionComponent } from 'react';

import * as DialogPrimitive from '@radix-ui/react-dialog';

import { Button } from '@/components/button';
import { cn } from '@/utils/cn';


export interface DialogFooterProps extends ComponentProps<'div'> {
    showCloseButton?: boolean;
}

export const DialogFooter: FunctionComponent<DialogFooterProps> = ({
    className,
    showCloseButton = false,
    children,
    ...props
}) => (
    <div
        data-slot="dialog-footer"
        className={cn(
            `
            -mx-4
            -mb-4
            flex
            flex-col-reverse
            gap-2
            rounded-b-xl
            border-t
            bg-muted/50
            p-4
            sm:flex-row
            sm:justify-end
            `,
            className,
        )}
        {...props}
    >
        {children}
        {showCloseButton && (
            <DialogPrimitive.Close asChild>
                <Button variant="outline">
                    Close
                </Button>
            </DialogPrimitive.Close>
        )}
    </div>
);
