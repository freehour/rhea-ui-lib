import { cn } from 'cn';
import type { ComponentProps, FunctionComponent } from 'react';


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
            items-center
            gap-0.5
            `,
            className,
        )}
        {...props}
    />
);
