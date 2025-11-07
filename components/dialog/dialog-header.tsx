import type { ComponentProps, FunctionComponent } from 'react';

import { cn } from '@/utils/cn';


export interface DialogHeaderProps extends ComponentProps<'div'> {
}

export const DialogHeader: FunctionComponent<DialogHeaderProps> = ({
    className,
    ...props
}) => (
    <div
        data-slot="dialog-header"
        className={cn(
            `
            flex
            flex-col
            gap-2
            text-center
            sm:text-left
            `,
            className,
        )}
        {...props}
    />
);
