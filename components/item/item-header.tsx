import type { ComponentProps, FunctionComponent } from 'react';

import { cn } from '@/utils/cn';


export interface ItemHeaderProps extends ComponentProps<'div'> {
}

export const ItemHeader: FunctionComponent<ItemHeaderProps> = ({
    className,
    ...props
}) => (
    <div
        data-slot="item-header"
        className={cn(
            `
            flex
            basis-full
            items-center
            justify-between
            gap-2
            `,
            className,
        )}
        {...props}
    />
);
