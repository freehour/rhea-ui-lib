import { cn } from 'cn';
import type { ComponentProps, FunctionComponent } from 'react';


export interface EmptyTitleProps extends ComponentProps<'div'> {
}

export const EmptyTitle: FunctionComponent<EmptyTitleProps> = ({
    className,
    ...props
}) => (
    <div
        data-slot="empty-title"
        className={cn(
            `
            text-sm
            font-medium
            tracking-tight
            `,
            className,
        )}
        {...props}
    />
);
