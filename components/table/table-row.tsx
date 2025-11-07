import type { ComponentProps, FunctionComponent } from 'react';

import { cn } from '@/utils/cn';


export interface TableRowProps extends ComponentProps<'tr'> {
}

export const TableRow: FunctionComponent<TableRowProps> = ({
    className,
    ...props
}) => (
    <tr
        data-slot="table-row"
        className={cn(
            `
            border-b
            transition-colors
            hover:bg-muted/50
            data-[state=selected]:bg-muted
            `,
            className,
        )}
        {...props}
    />
);
