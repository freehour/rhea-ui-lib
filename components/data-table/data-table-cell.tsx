import type { ReactNode } from 'react';

import type { Cell } from '@tanstack/react-table';
import { flexRender } from '@tanstack/react-table';

import type { TableCellProps } from '@/components/table';
import { TableCell } from '@/components/table';


export interface DataTableCellProps<TData> extends TableCellProps {
    cell: Cell<TData, unknown>;
}

export const DataTableCell = <TData,>({
    cell,
    ...props
}: DataTableCellProps<TData>): ReactNode => (
    <TableCell {...props}>
        {flexRender(cell.column.columnDef.cell, cell.getContext())}
    </TableCell>
);
