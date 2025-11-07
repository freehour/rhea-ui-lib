import type { ComponentProps, FunctionComponent } from 'react';

import { cn } from '@/utils/cn';


export interface TableProps extends ComponentProps<'table'> {
}

export const Table: FunctionComponent<TableProps> = ({
    className,
    ...props
}) => (
    <div
        data-slot="table-container"
        className="relative w-full overflow-x-auto"
    >
        <table
            data-slot="table"
            className={cn(
                `
                w-full
                caption-bottom
                text-sm
                `,
                className,
            )}
            {...props}
        />
    </div>
);
