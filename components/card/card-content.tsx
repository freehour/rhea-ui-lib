import type { ComponentProps, FunctionComponent } from 'react';

import { cn } from '@/utils';


export interface CardContentProps extends ComponentProps<'div'> {
}

export const CardContent: FunctionComponent<CardContentProps> = ({
    className,
    ...props
}) => (
    <div
        data-slot="card-content"
        className={cn(
            `
            px-4
            group-data-[size=sm]/card:px-3
            `,
            className,
        )}
        {...props}
    />
);
