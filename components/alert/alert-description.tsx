import type { ComponentProps, FunctionComponent } from 'react';

import { cn } from '@/utils/cn';


export interface AlertDescriptionProps extends ComponentProps<'div'> {
}

export const AlertDescription: FunctionComponent<AlertDescriptionProps> = ({
    className,
    ...props
}) => (
    <div
        data-slot="alert-description"
        className={cn(
            `
            text-sm
            text-balance
            text-muted-foreground
            md:text-pretty
            [&_a]:underline
            [&_a]:underline-offset-3
            [&_a]:hover:text-foreground
            [&_p:not(:last-child)]:mb-4
            `,
            className,
        )}
        {...props}
    />
);
