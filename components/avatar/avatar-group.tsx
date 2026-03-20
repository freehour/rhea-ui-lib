import type { ComponentProps, FunctionComponent } from 'react';

import { cn } from '@/utils/cn';


export interface AvatarGroupProps extends ComponentProps<'div'> {}

export const AvatarGroup: FunctionComponent<AvatarGroupProps> = ({
    className,
    ...props
}) => (
    <div
        data-slot="avatar-group"
        className={cn(
            `
            group/avatar-group
            flex
            -space-x-2
            *:data-[slot=avatar]:ring-2
            *:data-[slot=avatar]:ring-background
            `,
            className,
        )}
        {...props}
    />
);
