import type { ComponentProps, FunctionComponent } from 'react';

import { cn } from '@/utils/cn';


export interface PaginationProps extends ComponentProps<'nav'> {
}

export const Pagination: FunctionComponent<PaginationProps> = ({
    className,
    ...props
}) => (
    <nav
        role="navigation"
        aria-label="pagination"
        data-slot="pagination"
        className={cn(
            `
            mx-auto
            flex
            w-full
            justify-center
            `,
            className,
        )}
        {...props}
    />
);
