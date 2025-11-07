import type { ComponentProps, FunctionComponent } from 'react';

import { cn } from '@/utils/cn';


export interface ItemFooterProps extends ComponentProps<'div'> {
}

export const ItemFooter: FunctionComponent<ItemFooterProps> = ({
    className,
    ...props
}) => (
    <div
        data-slot="item-footer"
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
