import type { FunctionComponent } from 'react';

import type { OmitFrom } from '@/types/from';
import { cn } from '@/utils/cn';

import type { PaginationLinkProps } from './pagination-link';
import { PaginationLink } from './pagination-link';
import { PaginationNextLabel } from './pagination-next-label';


export interface PaginationNextProps extends OmitFrom<PaginationLinkProps, 'children' | 'asChild'> {
    label?: string;
}

/**
 * Renders a pagination next button.
 * **Note:** Uses `<a>` as the link element.
 * If you want to use a different element use `<PaginationLink asChild>` and optionally `<PaginationNextLabel>`.
 *
 * @example
 * <PaginationNext label="Next" href="/next-page" />
 */
export const PaginationNext: FunctionComponent<PaginationNextProps> = ({
    className,
    label,
    ...props
}) => (
    <PaginationLink
        size="default"
        className={cn(
            `
            gap-1
            px-2.5
            md:pr-2.5
            `,
            className,
        )}
        {...props}
    >
        <PaginationNextLabel>
            {label}
        </PaginationNextLabel>
    </PaginationLink>
);
