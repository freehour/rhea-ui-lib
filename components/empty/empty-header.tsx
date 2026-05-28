import type { ComponentProps, FunctionComponent } from 'react';

import { cn } from '@/utils/cn';


export interface EmptyHeaderProps extends ComponentProps<'div'> {
}

export const EmptyHeader: FunctionComponent<EmptyHeaderProps> = ({
    className,
    ...props
}) => (
    <div
        data-slot="empty-header"
        className={cn(
            `
            flex
            max-w-sm
            flex-col
            items-center
            gap-2
            `,
            className,
        )}
        {...props}
    />
);
