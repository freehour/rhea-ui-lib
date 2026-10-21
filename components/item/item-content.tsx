import { cn } from 'cn';
import type { ComponentProps, FunctionComponent } from 'react';


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
            overflow-hidden
            group-data-[size=xs]/item:gap-0
            `,
            className,
        )}
        {...props}
    />
);
