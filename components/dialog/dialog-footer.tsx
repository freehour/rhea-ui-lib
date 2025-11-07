import type { ComponentProps, FunctionComponent } from 'react';

import { cn } from '@/utils/cn';


export interface DialogFooterProps extends ComponentProps<'div'> {
}

export const DialogFooter: FunctionComponent<DialogFooterProps> = ({
    className,
    ...props
}) => (
    <div
        data-slot="dialog-footer"
        className={cn(
            `
            flex
            flex-col-reverse
            gap-2
            sm:flex-row
            sm:justify-end
            `,
            className,
        )}
        {...props}
    />
);
