import type { ComponentProps, FunctionComponent } from 'react';

import { cn } from '@/utils/cn';


export interface AlertTitleProps extends ComponentProps<'div'> {
}

export const AlertTitle: FunctionComponent<AlertTitleProps> = ({
    className,
    ...props
}) => (
    <div
        data-slot="alert-title"
        className={cn(
            `
            font-medium
            group-has-[>svg]/alert:col-start-2
            [&_a]:underline
            [&_a]:underline-offset-3
            [&_a]:hover:text-foreground
            `,
            className,
        )}
        {...props}
    />
);
