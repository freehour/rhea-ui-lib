import { cn } from 'cn';
import type { ComponentProps, FunctionComponent } from 'react';


export interface TableCellProps extends ComponentProps<'td'> {
}

export const TableCell: FunctionComponent<TableCellProps> = ({
    className,
    ...props
}) => (
    <td
        data-slot="table-cell"
        className={cn(
            `
            p-2
            align-middle
            whitespace-nowrap
            has-[[role=checkbox]]:pr-0
            `,
            className,
        )}
        {...props}
    />
);
