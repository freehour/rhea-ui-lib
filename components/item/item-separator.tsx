import type { ComponentProps, FunctionComponent } from 'react';

import { Separator } from '@/components/separator/separator';
import { cn } from '@/utils/cn';


export interface ItemSeparatorProps extends ComponentProps<typeof Separator> {
}

export const ItemSeparator: FunctionComponent<ItemSeparatorProps> = ({
    className,
    ...props
}) => (
    <Separator
        data-slot="item-separator"
        orientation="horizontal"
        className={cn('my-0', className)}
        {...props}
    />
);

