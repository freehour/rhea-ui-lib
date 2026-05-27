import type { ComponentProps, FunctionComponent } from 'react';

import { cn } from '@/utils/cn';


export interface TableFooterProps extends ComponentProps<'tfoot'> {
}

export const TableFooter: FunctionComponent<TableFooterProps> = ({
    className,
    ...props
}) => (
    <tfoot
        data-slot="table-footer"
        className={cn(
            `
            sticky
            bottom-0
            z-1
            border-t
            bg-muted/50
            font-medium
            shadow
            [&>tr]:last:border-b-0
            `,
            className,
        )}
        {...props}
    />
);
