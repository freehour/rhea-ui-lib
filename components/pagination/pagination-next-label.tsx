import type { ComponentProps, FunctionComponent } from 'react';
import { ChevronRightIcon } from 'lucide-react';

import { cn } from '@/utils/cn';


export interface PaginationNextLabelProps extends ComponentProps<'span'> {
}

/**
 * A label for the next page in a pagination component.
 * It displays a text label followed by a right chevron icon.
 * The text label is hidden on empty states and mobile screens.
 *
 * @example
 * <PaginationNextLabel>Next</PaginationNextLabel>
 *
 * @example
 * <PaginationNextLabel /> // Just the icon, no label text
 */
export const PaginationNextLabel: FunctionComponent<PaginationNextLabelProps> = ({
    className,
    children,
    ...props
}) => (
    <>
        <span
            className={cn('hidden empty:hidden md:block', className)}
            {...props}
        >
            {children}
        </span>
        <ChevronRightIcon />
    </>
);
