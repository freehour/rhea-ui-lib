import { ChevronLeftIcon } from 'lucide-react';
import type { ComponentProps, FunctionComponent } from 'react';

import { cn } from '@/utils/cn';


export interface PaginationPreviousLabelProps extends ComponentProps<'span'> {
}

/**
 * A label for the previous page in a pagination component.
 * It displays a left chevron icon followed by a text label.
 * The text label is hidden on empty states and mobile screens.
 *
 * @example
 * <PaginationPreviousLabel>Previous</PaginationPreviousLabel>
 *
 * @example
 * <PaginationPreviousLabel /> // Just the icon, no label text
 */
export const PaginationPreviousLabel: FunctionComponent<PaginationPreviousLabelProps> = ({
    className,
    children,
    ...props
}) => (
    <>
        <ChevronLeftIcon data-icon="inline-start" />
        <span
            className={cn('hidden empty:hidden sm:block', className)}
            {...props}
        >
            {children}
        </span>
    </>
);
