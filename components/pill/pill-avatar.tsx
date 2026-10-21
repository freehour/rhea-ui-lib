import { cn } from 'cn';
import type { FunctionComponent } from 'react';

import type { AvatarProps } from '@/components/avatar';
import { Avatar } from '@/components/avatar';


export interface PillAvatarProps extends AvatarProps {
}

export const PillAvatar: FunctionComponent<PillAvatarProps> = ({
    className,
    ...props
}) => (
    <Avatar
        className={cn(
            `
            -ml-1
            h-4
            w-4
            `,
            className,
        )}
        {...props}
    />
);
