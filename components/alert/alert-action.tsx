import { cn } from 'cn';
import type { ComponentProps, FunctionComponent } from 'react';


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
