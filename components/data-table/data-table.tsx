import type { ReactNode } from 'react';

import type { Table as TanstackTable } from '@tanstack/react-table';

import type { TableProps } from '@/components/table';
import { Table } from '@/components/table';

import { DataTableBody } from './data-table-body';
import { DataTableFooter } from './data-table-footer';
import { DataTableHeader } from './data-table-header';


export interface DataTableProps<TData> extends TableProps {
    table: TanstackTable<TData>;
    showHeader?: boolean;
    showFooter?: boolean;
}

export const DataTable = <TData,>({
    table,
    showHeader = true,
    showFooter = true,
    children,
    ...props
}: DataTableProps<TData>): ReactNode => (
    <Table {...props}>
        {children ?? (
            <>
                {showHeader && (
                    <DataTableHeader
                        headerGroups={table.getHeaderGroups()}
                    />
                )}
                <DataTableBody
                    rows={table.getRowModel().rows}
                />
                {showFooter && (
                    <DataTableFooter
                        footerGroups={table.getFooterGroups()}
                    />
                )}
            </>
        )}
    </Table>
);
