import type { ComponentProps, FunctionComponent } from 'react';

import { cn } from '@/utils/cn';


export interface AlertActionProps extends ComponentProps<'div'> {
}

export const AlertAction: FunctionComponent<AlertActionProps> = ({
    className,
    ...props
}) => (
    <div
        data-slot="alert-action"
        className={cn(
            `
            absolute
            top-2
            right-2
            `,
            className,
        )}
        {...props}
    />
);
