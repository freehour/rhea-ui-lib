import type { ComponentProps, FunctionComponent } from 'react';

import { cn } from '@/utils/cn';


export interface PillAvatarGroupProps extends ComponentProps<'div'> {
}

export const PillAvatarGroup: FunctionComponent<PillAvatarGroupProps> = ({
    className,
    ...props
}) => (
    <div
        className={cn(
            `
            flex
            items-center
            -space-x-1
            [&>*:not(:first-of-type)]:mask-[radial-gradient(circle_9px_at_-4px_50%,transparent_99%,white_100%)]
            `,
            className,
        )}
        {...props}
    />
);
