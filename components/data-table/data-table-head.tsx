import type { ReactNode } from 'react';

import type { Header } from '@tanstack/react-table';
import { flexRender } from '@tanstack/react-table';

import type { TableHeadProps } from '@/components/table';
import { TableHead } from '@/components/table';


export interface DataTableHeadProps<TData> extends TableHeadProps {
    header: Header<TData, unknown>;
}

export const DataTableHead = <TData,>({
    header,
    ...props
}: DataTableHeadProps<TData>): ReactNode => (
    <TableHead {...props}>
        {
            header.isPlaceholder
                ? null
                : flexRender(
                    header.column.columnDef.header,
                    header.getContext(),
                )
        }
    </TableHead>
);
