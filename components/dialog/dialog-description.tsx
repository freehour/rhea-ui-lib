import type { ComponentProps, FunctionComponent } from 'react';

import * as DialogPrimitive from '@radix-ui/react-dialog';

import { cn } from '@/utils/cn';


export interface DialogDescriptionProps extends ComponentProps<typeof DialogPrimitive.Description> {
}

export const DialogDescription: FunctionComponent<DialogDescriptionProps> = ({
    className,
    ...props
}) => (
    <DialogPrimitive.Description
        data-slot="dialog-description"
        className={cn(
            `
            text-sm
            text-muted-foreground
            `,
            className,
        )}
        {...props}
    />
);
