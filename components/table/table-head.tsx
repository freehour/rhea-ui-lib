import type { ComponentProps, FunctionComponent } from 'react';

import { cn } from '@/utils/cn';


export interface TableHeadProps extends ComponentProps<'th'> {
}

export const TableHead: FunctionComponent<TableHeadProps> = ({
    className,
    ...props
}) => (
    <th
        data-slot="table-head"
        className={cn(
            `
            h-10
            px-2
            text-left
            align-middle
            font-medium
            whitespace-nowrap
            text-foreground
            [&:has([role=checkbox])]:pr-0
            *:[[role=checkbox]]:translate-y-0.5
            `,
            className,
        )}
        {...props}
    />
);
