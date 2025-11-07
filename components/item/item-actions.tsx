import type { ComponentProps, FunctionComponent } from 'react';

import { cn } from '@/utils/cn';


export interface ItemActionsProps extends ComponentProps<'div'> {
}

export const ItemActions: FunctionComponent<ItemActionsProps> = ({
    className,
    ...props
}) => (
    <div
        data-slot="item-actions"
        className={cn(
            `
            flex
            items-center
            gap-2
            `,
            className,
        )}
        {...props}
    />
);
