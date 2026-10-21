import { cn } from 'cn';
import type { ComponentProps, FunctionComponent } from 'react';


export interface PopoverTitleProps extends ComponentProps<'div'> {
}

export const PopoverTitle: FunctionComponent<PopoverTitleProps> = ({
    className,
    ...props
}) => (
    <div
        data-slot="popover-title"
        className={cn(
            `
            font-medium
            `,
            className,
        )}
        {...props}
    />
);
