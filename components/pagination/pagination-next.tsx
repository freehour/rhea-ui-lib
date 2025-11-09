import type { ComponentProps, FunctionComponent } from 'react';
import { ChevronRightIcon } from 'lucide-react';

import { cn } from '@/utils/cn';

import { PaginationLink } from './pagination-link';


export interface PaginationNextProps extends ComponentProps<typeof PaginationLink> {
    label?: string;
}

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
            sm:pr-2.5
            `,
            className,
        )}
        {...props}
    >
        <span
            hidden={label === undefined}
            className="hidden md:block"
        >
            {label}
        </span>
        <ChevronRightIcon />
    </PaginationLink>
);
