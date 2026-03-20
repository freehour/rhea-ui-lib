import type { ComponentProps, FunctionComponent } from 'react';

import { cn } from '@/utils/cn';


export interface ItemDescriptionProps extends ComponentProps<'p'> {
}

export const ItemDescription: FunctionComponent<ItemDescriptionProps> = ({
    className,
    ...props
}) => (
    <p
        data-slot="item-description"
        className={cn(
            `
            line-clamp-2
            text-left
            text-sm
            leading-normal
            font-normal
            text-muted-foreground
            group-data-[size=xs]/item:text-xs
            [&>a]:underline
            [&>a]:underline-offset-4
            [&>a:hover]:text-primary
            `,
            className,
        )}
        {...props}
    />
);
