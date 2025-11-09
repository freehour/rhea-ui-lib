import type { ComponentProps, FunctionComponent } from 'react';

import { cn } from '@/utils/cn';


export interface PaginationContentProps extends ComponentProps<'ul'> {
}

export const PaginationContent: FunctionComponent<PaginationContentProps> = ({
    className,
    ...props
}) => (
    <ul
        data-slot="pagination-content"
        className={cn(
            `
            flex
            flex-row
            items-center
            gap-1
            `,
            className,
        )}
        {...props}
    />
);
