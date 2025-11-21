import type { ComponentProps, FunctionComponent } from 'react';

import { cn } from '@/utils/cn';


export interface PillStatusProps extends ComponentProps<'div'> {
}

export const PillStatus: FunctionComponent<PillStatusProps> = ({
    className,
    ...props
}) => (
    <div
        className={cn(
            `
            flex
            items-center
            gap-2
            border-r
            pr-2
            font-medium
            `,
            className,
        )}
        {...props}
    />
);
