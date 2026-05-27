import type { ReactNode } from 'react';

import type { HeaderGroup } from '@tanstack/react-table';

import type { TableRowProps } from '@/components/table';
import { TableRow } from '@/components/table';

import { DataTableHead } from './data-table-head';


export interface DataTableHeadGroupProps<TData> extends TableRowProps {
    headerGroup?: HeaderGroup<TData>;
}

export const DataTableHeadGroup = <TData,>({
    headerGroup,
    children,
    ...props
}: DataTableHeadGroupProps<TData>): ReactNode => (
    <TableRow {...props}>
        {
            children ?? headerGroup?.headers.map(header => (
                <DataTableHead
                    key={header.id}
                    header={header}
                />
            ))
        }
    </TableRow>
);
