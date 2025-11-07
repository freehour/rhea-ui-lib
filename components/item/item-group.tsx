import type { ComponentProps, FunctionComponent } from 'react';

import { cn } from '@/utils/cn';


export interface ItemGroupProps extends ComponentProps<'div'> {
}

export const ItemGroup: FunctionComponent<ItemGroupProps> = ({
    className,
    ...props
}) => (
    <div
        role="list"
        data-slot="item-group"
        className={cn(
            `
            group/item-group
            flex
            flex-col
            `,
            className,
        )}
        {...props}
    />
);
