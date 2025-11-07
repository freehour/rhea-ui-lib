import type { ComponentProps, FunctionComponent } from 'react';

import { cn } from '@/utils/cn';


export interface TableHeaderProps extends ComponentProps<'thead'> {
}

export const TableHeader: FunctionComponent<TableHeaderProps> = ({
    className,
    ...props
}) => (
    <thead
        data-slot="table-header"
        className={cn('[&_tr]:border-b', className)}
        {...props}
    />
);
