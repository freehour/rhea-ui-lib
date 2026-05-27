import type { ReactNode } from 'react';

import type { Row } from '@tanstack/react-table';

import type { TableBodyProps } from '@/components/table';
import { TableBody } from '@/components/table';

import { DataTableRow } from './data-table-row';


export interface DataTableBodyProps<TData> extends TableBodyProps {
    rows?: Row<TData>[];
}

export const DataTableBody = <TData,>({
    rows,
    children,
    ...props
}: DataTableBodyProps<TData>): ReactNode => (
    <TableBody {...props}>
        {
            children ?? rows?.map(row => (
                <DataTableRow
                    key={row.id}
                    row={row}
                />
            ))
        }
    </TableBody>
);
