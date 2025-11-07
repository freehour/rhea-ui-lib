import type { ComponentProps, FunctionComponent } from 'react';

import { cn } from '@/utils/cn';


export interface ItemTitleProps extends ComponentProps<'div'> {
}

export const ItemTitle: FunctionComponent<ItemTitleProps> = ({
    className,
    ...props
}) => (
    <div
        data-slot="item-title"
        className={cn(
            `
            flex
            w-fit
            items-center
            gap-2
            text-sm
            leading-snug
            font-medium
            `,
            className,
        )}
        {...props}
    />
);
