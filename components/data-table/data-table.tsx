import type { ReactNode } from 'react';

import type { TableOptions } from '@tanstack/react-table';
import {
    flexRender,
    useReactTable,
} from '@tanstack/react-table';

import {
    Table,
    TableBody,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/table';
import { cn } from '@/utils/cn';


export interface DataTableProps<TData> extends TableOptions<TData> {
    className?: string;
    showHeader?: boolean;
    showFooter?: boolean;
}

export const DataTable = <TData,>({
    className,
    showHeader = true,
    showFooter = false,
    columns,
    ...options
}: DataTableProps<TData>): ReactNode => {
    const table = useReactTable({ columns, ...options });

    return (
        <div
            data-slot="data-table"
            className={cn(
                `
                flex
                overflow-hidden
                rounded-md
                border
                `,
                className,
            )}
        >
            <Table>
                <TableHeader hidden={!showHeader} className="sticky top-0 z-1 bg-secondary shadow">
                    {table.getHeaderGroups().map(headerGroup => (
                        <TableRow key={headerGroup.id}>
                            {headerGroup.headers.map(header => (
                                <TableHead key={header.id}>
                                    {header.isPlaceholder
                                        ? null
                                        : flexRender(
                                            header.column.columnDef.header,
                                            header.getContext(),
                                        )}
                                </TableHead>
                            ))}
                        </TableRow>
                    ))}
                </TableHeader>
                <TableBody>
                    {table.getRowModel().rows.length
                        ? table.getRowModel().rows.map(row => (
                            <TableRow
                                key={row.id}
                                data-state={row.getIsSelected() && 'selected'}
                            >
                                {row.getVisibleCells().map(cell => (
                                    <TableCell key={cell.id}>
                                        {flexRender(
                                            cell.column.columnDef.cell,
                                            cell.getContext(),
                                        )}
                                    </TableCell>
                                ))}
                            </TableRow>
                        ))
                        : (
                            <TableRow>
                                <TableCell
                                    colSpan={columns.length}
                                    className={`
                                        h-24
                                        text-center
                                    `}
                                >
                                    No results.
                                </TableCell>
                            </TableRow>
                        )}
                </TableBody>
                <TableFooter hidden={!showFooter} className="sticky bottom-0 z-1 bg-secondary shadow">
                    {table.getFooterGroups().map(footerGroup => (
                        <TableRow key={footerGroup.id}>
                            {footerGroup.headers.map(header => (
                                <TableHead key={header.id}>
                                    {flexRender(
                                        header.column.columnDef.footer,
                                        header.getContext(),
                                    )}
                                </TableHead>
                            ))}
                        </TableRow>
                    ))}
                </TableFooter>
            </Table>
        </div>
    );
};
