import type { ComponentProps, FunctionComponent } from 'react';

import { cn } from '@/utils/cn';


export interface TableBodyProps extends ComponentProps<'tbody'> {
}

export const TableBody: FunctionComponent<TableBodyProps> = ({
    className,
    ...props
}) => (
    <tbody
        data-slot="table-body"
        className={cn('[&_tr:last-child]:border-0', className)}
        {...props}
    />
);
