import { cn } from 'cn';
import type { ComponentProps, FunctionComponent } from 'react';


export interface EmptyDescriptionProps extends ComponentProps<'div'> {
}

export const EmptyDescription: FunctionComponent<EmptyDescriptionProps> = ({
    className,
    ...props
}) => (
    <div
        data-slot="empty-description"
        className={cn(
            `
            text-sm/relaxed
            text-muted-foreground
            [&>a]:underline
            [&>a]:underline-offset-4
            [&>a:hover]:text-primary
            `,
            className,
        )}
        {...props}
    />
);
