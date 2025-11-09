import type { ComponentProps, FunctionComponent } from 'react';
import { ChevronLeftIcon } from 'lucide-react';

import { cn } from '@/utils/cn';

import { PaginationLink } from './pagination-link';


export interface PaginationPreviousProps extends ComponentProps<typeof PaginationLink> {
    label?: string;
}

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
            sm:pl-2.5
            `,
            className,
        )}
        {...props}
    >
        <ChevronLeftIcon />
        <span
            hidden={label === undefined}
            className="hidden md:block"
        >
            {label}
        </span>
    </PaginationLink>
);
