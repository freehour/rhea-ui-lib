import type { FunctionComponent, PropsWithChildren } from 'react';

import { Slot } from '@radix-ui/react-slot';

import { cn } from '@/utils/cn';


export type PillIconProps = PropsWithChildren<{
    className?: string;
}>;

export const PillIcon: FunctionComponent<PillIconProps> = ({
    className,
    ...props
}) => (
    <Slot
        data-slot="pill-icon"
        className={cn('size-3 text-muted-foreground', className)}
        {...props}
    />
);
