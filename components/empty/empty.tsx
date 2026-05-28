import type { ComponentProps, FunctionComponent } from 'react';

import { cn } from '@/utils/cn';


export interface EmptyProps extends ComponentProps<'div'> {
}

export const Empty: FunctionComponent<EmptyProps> = ({
    className,
    ...props
}) => (
    <div
        data-slot="empty"
        className={cn(
            `
            flex
            w-full
            min-w-0
            flex-1
            flex-col
            items-center
            justify-center
            gap-4
            rounded-xl
            border-dashed
            p-6
            text-center
            text-balance
            `,
            className,
        )}
        {...props}
    />
);
