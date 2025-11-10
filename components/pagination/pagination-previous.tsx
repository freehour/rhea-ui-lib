import type { FunctionComponent } from 'react';

import type { OmitFrom } from '@/types/from';
import { cn } from '@/utils/cn';

import type { PaginationLinkProps } from './pagination-link';
import { PaginationLink } from './pagination-link';
import { PaginationPreviousLabel } from './pagination-previous-label';


export interface PaginationPreviousProps extends OmitFrom<PaginationLinkProps, 'children' | 'asChild'> {
    label?: string;
}

/**
 * Renders a pagination previous button.
 * **Note:** Uses `<a>` as the link element.
 * If you want to use a different element use `<PaginationLink asChild>` and opitonally `<PaginationPreviousLabel>`.
 *
 * @example
 * <PaginationPrevious label="Previous" href="/previous-page" />
 */
export const PaginationPrevious: FunctionComponent<PaginationPreviousProps> = ({
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
            md:pl-2.5
            `,
            className,
        )}
        {...props}
    >
        <PaginationPreviousLabel>
            {label}
        </PaginationPreviousLabel>
    </PaginationLink>
);
