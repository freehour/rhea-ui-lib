import type { ComponentProps, FunctionComponent } from 'react';

import * as DialogPrimitive from '@radix-ui/react-dialog';

import { cn } from '@/utils/cn';


export interface DialogTitleProps extends ComponentProps<typeof DialogPrimitive.Title> {
}

export const DialogTitle: FunctionComponent<DialogTitleProps> = ({
    className,
    ...props
}) => (
    <DialogPrimitive.Title
        data-slot="dialog-title"
        className={cn(
            `
            text-lg
            leading-none
            font-semibold
            `,
            className,
        )}
        {...props}
    />
);
