import type { ComponentProps, FunctionComponent } from 'react';

import { cn } from '@/utils/cn';


export interface SheetFooterProps extends ComponentProps<'div'> {
}

export const SheetFooter: FunctionComponent<SheetFooterProps> = ({
    className,
    ...props
}) => (
    <div
        data-slot="sheet-footer"
        className={cn(
            `
            mt-auto
            flex
            flex-col
            gap-2
            p-4
            `,
            className,
        )}
        {...props}
    />
);

