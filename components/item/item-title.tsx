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
            line-clamp-1
            flex
            w-fit
            items-center
            gap-2
            text-sm
            leading-snug
            font-medium
            underline-offset-4
            `,
            className,
        )}
        {...props}
    />
);
