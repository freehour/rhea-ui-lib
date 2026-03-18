import type { ComponentProps, FunctionComponent } from 'react';

import { cn } from '@/utils';


export interface CardFooterProps extends ComponentProps<'div'> {
}

export const CardFooter: FunctionComponent<CardFooterProps> = ({
    className,
    ...props
}) => (
    <div
        data-slot="card-footer"
        className={cn(
            `
            flex
            items-center
            rounded-b-xl
            border-t
            bg-muted/50
            p-4
            group-data-[size=sm]/card:p-3
            `,
            className,
        )}
        {...props}
    />
);
