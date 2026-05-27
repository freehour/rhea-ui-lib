import type { ReactNode } from 'react';

import type { Row } from '@tanstack/react-table';

import type { TableRowProps } from '@/components/table';
import { TableRow } from '@/components/table';

import { DataTableCell } from './data-table-cell';


export interface DataTableRowProps<TData> extends TableRowProps {
    row: Row<TData>;
}

export const DataTableRow = <TData,>({
    row,
    children,
    ...props
}: DataTableRowProps<TData>): ReactNode => (
    <TableRow
        data-state={row.getIsSelected() && 'selected'}
        {...props}
    >
        {
            children ?? row.getVisibleCells().map(cell => (
                <DataTableCell
                    key={cell.id}
                    cell={cell}
                />
            ))
        }
    </TableRow>
);
