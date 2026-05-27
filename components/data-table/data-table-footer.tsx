import type { ReactNode } from 'react';

import type { HeaderGroup } from '@tanstack/react-table';

import type { TableFooterProps } from '@/components/table';
import { TableFooter } from '@/components/table';

import { DataTableHeadGroup } from './data-table-head-group';


export interface DataTableFooterProps<TData> extends TableFooterProps {
    footerGroups?: HeaderGroup<TData>[];
}

export const DataTableFooter = <TData,>({
    footerGroups,
    children,
    ...props
}: DataTableFooterProps<TData>): ReactNode => (
    <TableFooter {...props}>
        {
            children ?? footerGroups?.map(footerGroup => (
                <DataTableHeadGroup
                    key={footerGroup.id}
                    headerGroup={footerGroup}
                />
            ))
        }
    </TableFooter>
);
