import type { ComponentProps, FunctionComponent } from 'react';
import { MoreHorizontalIcon } from 'lucide-react';

import { cn } from '@/utils/cn';


export interface PaginationEllipsisProps extends ComponentProps<'span'> {
    className?: string;
}

export const PaginationEllipsis: FunctionComponent<PaginationEllipsisProps> = ({
    className,
    ...props
}) => (
    <span
        aria-hidden
        data-slot="pagination-ellipsis"
        className={cn(
            `
            flex
            size-9
            items-center
            justify-center
            `,
            className,
        )}
        {...props}
    >
        <MoreHorizontalIcon className="size-4" />
        <span className="sr-only">More pages</span>
    </span>
);
