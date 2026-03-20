import type { ComponentProps, FunctionComponent } from 'react';

import { cn } from '@/utils/cn';


export interface CardDescriptionProps extends ComponentProps<'div'> {
}

export const CardDescription: FunctionComponent<CardDescriptionProps> = ({
    className,
    ...props
}) => (
    <div
        data-slot="card-description"
        className={cn(
            `
            text-sm
            text-muted-foreground
            `,
            className,
        )}
        {...props}
    />
);
