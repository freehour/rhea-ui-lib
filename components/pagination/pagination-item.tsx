import type { ComponentProps, FunctionComponent } from 'react';


export interface PaginationItemProps extends ComponentProps<'li'> {}

export const PaginationItem: FunctionComponent<PaginationItemProps> = ({
    ...props
}) => <li data-slot="pagination-item" {...props} />;
