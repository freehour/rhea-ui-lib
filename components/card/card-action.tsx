import type { ComponentProps, FunctionComponent } from 'react';

import { cn } from '@/utils/cn';


export interface CardActionProps extends ComponentProps<'div'> {}

export const CardAction: FunctionComponent<CardActionProps> = ({
    className,
    ...props
}) => (
    <div
        data-slot="card-action"
        className={cn(
            `
            col-start-2
            row-span-2
            row-start-1
            self-start
            justify-self-end
            `,
            className,
        )}
        {...props}
    />
);
