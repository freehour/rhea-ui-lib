import type { ComponentProps, FunctionComponent } from 'react';

import * as AvatarPrimitive from '@radix-ui/react-avatar';

import { cn } from '@/utils/cn';


export interface AvatarProps extends ComponentProps<typeof AvatarPrimitive.Root> {
}

export const Avatar: FunctionComponent<AvatarProps> = ({
    className,
    ...props
}) => (
    <AvatarPrimitive.Root
        data-slot="avatar"
        className={cn(
            `
            relative
            flex
            size-8
            shrink-0
            overflow-hidden
            rounded-full
            `,
            className,
        )}
        {...props}
    />
);
