import type { ReactNode } from 'react';

import type { HeaderGroup } from '@tanstack/react-table';

import type { TableHeaderProps } from '@/components/table';
import { TableHeader } from '@/components/table';

import { DataTableHeadGroup } from './data-table-head-group';


export interface DataTableHeaderProps<TData> extends TableHeaderProps {
    headerGroups?: HeaderGroup<TData>[];
}

export const DataTableHeader = <TData,>({
    headerGroups,
    children,
    ...props
}: DataTableHeaderProps<TData>): ReactNode => (
    <TableHeader {...props}>
        {
            children ?? headerGroups?.map(headerGroup => (
                <DataTableHeadGroup
                    key={headerGroup.id}
                    headerGroup={headerGroup}
                />
            ))
        }
    </TableHeader>
);
