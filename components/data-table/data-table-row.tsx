import type { ReactNode } from 'react';
import { useCallback } from 'react';

import type { Row } from '@tanstack/react-table';
import { flexRender } from '@tanstack/react-table';

import { TableCell, TableRow } from '@/components/table';


export interface DataTableRowProps<TData> {
    row: Row<TData>;
    onClick?: (row: Row<TData>) => void;
}

export const DataTableRow = <TData,>({ row, onClick }: DataTableRowProps<TData>): ReactNode => {
    const handleClick = useCallback(() => onClick?.(row), [onClick, row]);

    return (
        <TableRow
            data-state={row.getIsSelected() && 'selected'}
            onClick={handleClick}
        >
            {row.getVisibleCells().map(cell => (
                <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </TableCell>
            ))}
        </TableRow>
    );
};
