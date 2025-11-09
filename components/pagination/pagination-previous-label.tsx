import type { ComponentProps, FunctionComponent } from 'react';
import { ChevronLeftIcon } from 'lucide-react';

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
        <ChevronLeftIcon />
        <span
            className={cn('hidden empty:hidden md:block', className)}
            {...props}
        >
            {children}
        </span>
    </>
);
