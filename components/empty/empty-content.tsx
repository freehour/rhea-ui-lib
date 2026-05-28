import type { ComponentProps, FunctionComponent } from 'react';

import { cn } from '@/utils/cn';


export interface EmptyContentProps extends ComponentProps<'div'> {
}

export const EmptyContent: FunctionComponent<EmptyContentProps> = ({
    className,
    ...props
}) => (
    <div
        data-slot="empty-content"
        className={cn(
            `
            flex
            w-full
            max-w-sm
            min-w-0
            flex-col
            items-center
            gap-2.5
            text-sm
            text-balance
            `,
            className,
        )}
        {...props}
    />
);
