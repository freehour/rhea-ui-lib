import type { FunctionComponent } from 'react';

import type { SeparatorProps } from '@/components/separator';
import { Separator } from '@/components/separator';
import type { OmitFrom } from '@/types/from';
import { cn } from '@/utils/cn';


export interface ItemSeparatorProps extends OmitFrom<SeparatorProps, 'orientation'> {
}

export const ItemSeparator: FunctionComponent<ItemSeparatorProps> = ({
    className,
    ...props
}) => (
    <Separator
        data-slot="item-separator"
        orientation="horizontal"
        className={cn('my-2', className)}
        {...props}
    />
);

