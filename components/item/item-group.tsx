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
            w-full
            flex-col
            gap-4
            has-data-[size=sm]:gap-2.5
            has-data-[size=xs]:gap-2
            `,
            className,
        )}
        {...props}
    />
);
