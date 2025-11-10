import type { ComponentProps, FunctionComponent } from 'react';


export interface PaginationProps extends ComponentProps<'nav'> {
}

export const Pagination: FunctionComponent<PaginationProps> = props => (
    <nav
        role="navigation"
        aria-label="pagination"
        data-slot="pagination"
        {...props}
    />
);
