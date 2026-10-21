import { cn } from 'cn';
import type { ComponentProps, FunctionComponent } from 'react';


export interface PopoverDescriptionProps extends ComponentProps<'p'> {
}

export const PopoverDescription: FunctionComponent<PopoverDescriptionProps> = ({
    className,
    ...props
}) => (
    <p
        data-slot="popover-description"
        className={cn(
            `
            text-muted-foreground
            `,
            className,
        )}
        {...props}
    />
);
