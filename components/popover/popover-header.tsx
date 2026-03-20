import type { ComponentProps, FunctionComponent } from 'react';

import { cn } from '@/utils/cn';


export interface PopoverHeaderProps extends ComponentProps<'div'> {
}

export const PopoverHeader: FunctionComponent<PopoverHeaderProps> = ({
    className,
    ...props
}) => (
    <div
        data-slot="popover-header"
        className={cn(
            `
            flex
            flex-col
            gap-0.5
            text-sm
            `,
            className,
        )}
        {...props}
    />
);
