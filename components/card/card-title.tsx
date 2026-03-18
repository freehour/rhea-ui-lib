import type { ComponentProps, FunctionComponent } from 'react';

import { cn } from '@/utils';


export interface CardTitleProps extends ComponentProps<'div'> {
}

export const CardTitle: FunctionComponent<CardTitleProps> = ({
    className,
    ...props
}) => (
    <div
        data-slot="card-title"
        className={cn(
            `
            text-base
            leading-snug
            font-medium
            group-data-[size=sm]/card:text-sm
            `,
            className,
        )}
        {...props}
    />
);
