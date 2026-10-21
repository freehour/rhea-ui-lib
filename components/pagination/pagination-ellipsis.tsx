import { cn } from 'cn';
import { MoreHorizontalIcon } from 'lucide-react';
import type { ComponentProps, FunctionComponent } from 'react';


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
            size-8
            items-center
            justify-center
            [&_svg:not([class*='size-'])]:size-4
            `,
            className,
        )}
        {...props}
    >
        <MoreHorizontalIcon />
        <span className="sr-only">More pages</span>
    </span>
);
