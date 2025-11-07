import type { ComponentProps, FunctionComponent } from 'react';

import { cn } from '@/utils/cn';


export interface ItemContentProps extends ComponentProps<'div'> {
}

export const ItemContent: FunctionComponent<ItemContentProps> = ({
    className,
    ...props
}) => (
    <div
        data-slot="item-content"
        className={cn(
            `
                flex
                flex-1
                flex-col
                gap-1
                [&+[data-slot=item-content]]:flex-none
            `,
            className,
        )}
        {...props}
    />
);
